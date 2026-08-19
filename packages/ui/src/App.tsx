import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Stats from './components/Stats';
import ServiceGrid from './components/ServiceGrid';
import WalletSection from './components/WalletSection';
import HowItWorks from './components/HowItWorks';
import BannerCarousel from './components/BannerCarousel';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import SendMoneyModal from './components/SendMoneyModal';

type AuthMode = 'login' | 'signup';

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [sendOpen, setSendOpen] = useState(false);
  const [sender, setSender] = useState('');

  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-ink dark:bg-night dark:text-night-ink">
      <Navbar onLogin={() => openAuth('login')} onSignup={() => openAuth('signup')} />

      <main>
        <Hero
          onSignup={() => openAuth('signup')}
          onLogin={() => openAuth('login')}
          onSend={() => setSendOpen(true)}
        />
        <TrustMarquee />
        <Stats />
        <ServiceGrid />
        <WalletSection onSend={() => setSendOpen(true)} />
        <HowItWorks onSignup={() => openAuth('signup')} />
        <BannerCarousel />
        <Faq />
        <FinalCta onSignup={() => openAuth('signup')} onLogin={() => openAuth('login')} />
      </main>

      <Footer />

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onLoggedIn={(u) => setSender(u)}
        initialMode={authMode}
      />
      <SendMoneyModal
        open={sendOpen}
        onClose={() => setSendOpen(false)}
        defaultSender={sender}
      />
    </div>
  );
}