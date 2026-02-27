import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyGravity from './components/WhyGravity';
import Services from './components/Services';
import Transformation from './components/Transformation';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MembershipModal from './components/MembershipModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-background text-white min-h-screen font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyGravity />
        <Services />
        <Transformation />
        <Membership openModal={openModal} />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MembershipModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={selectedPlan} 
      />
    </div>
  );
}

export default App;
