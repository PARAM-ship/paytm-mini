import express, { Request, Response, NextFunction } from 'express';
import { createUser, findUser, sendMoney } from '../storage/src';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/signup',async (req,res)=>{
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const email = body.email;

    if(!username || !password || !email){
        return res.status(400).json({
            message:"some fields missing!"
        })
    }

    try{
        await createUser(username,email,password);
    }catch(error){
        return res.status(500).json({
            error,
            message:"failed while creating in database."
        })
    }

    res.status(200).json({
        message:"User created Successfully!"
    })
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;

    if(!username || !password){
        return res.status(401).json({
            message:"some fields are missing"
        })
    }

    try{
        const user = await findUser(username,password);
        if(!user){
            return res.status(400).json({
                message:"User not found!"
            })
        }
    }catch(error){
        res.status(400).json({
            message:"failed logging from database."
        })
    }

    return res.status(200).json({
        message:"Logged In!"
    })
})

app.post('/pay',async (req,res)=>{
    const {senderId,receiverId,amount} = req.body;

    try{
        const {senderBalance,receiverBalance} = await sendMoney(senderId,receiverId,amount);
    }catch(error){
        return res.status(500).json({
            message:"error while sending.",
            error
        })
    }
    return res.json({
        message:"Send Money successfully!"
    })
})

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Gateway listening on port ${PORT}`);
});

export default app; 