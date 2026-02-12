import HeroSection from './components/landing/HeroSection';
import BenefitsSection from './components/landing/BenefitsSection';
import PricingSection from './components/landing/PricingSection';
import TestimonialsSection from './components/landing/TestimonialsSection';
import ContactSection from './components/landing/ContactSection';
import Footer from './components/landing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
