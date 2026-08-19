import prisma from "./client";


export async function createUser(username:any,email:any,password:any) {
    return await prisma.user.create({
        data:{
            username,
            email,
            password,
            account:{
                create:{
                    balance: 1000 // signin bonus :)
                }
            }
        },
        include:{account:true}
    })
}

export async function findUser(username:any,password:any){
    return await prisma.user.findUnique({
        where:{
            username
        },
        include:{account:true}
    });
}

export async function sendMoney(senderUsername:any,receiverUsername:any,amount:any) {
    return await prisma.$transaction(async (tx) => {
        
        const sender = await tx.user.findUnique({
            where:{
                username:senderUsername
            },
            include:{account:true}
        })

        const senderAccount = sender.account[0];

        const receiver = await tx.user.findUnique({
            where:{
                username:receiverUsername
            },
            include:{account:true}
        })

        const receiverAccount = receiver.account[0];
        
        const updatedSenderAccount = await tx.account.update({
            where:{
                id:senderAccount.id
            },
            data:{
                balance:{
                    decrement:amount
                }
            }
        })

        const updatedReceiverAccount = await tx.account.update({
            where:{
                id:receiverAccount.id
            },
            data:{
                balance:{
                    increment:amount
                }
            }
        })
        return {
            senderBalance:updatedSenderAccount.balance,
            receiverBalance:updatedReceiverAccount.balance
        }
    }
)
}