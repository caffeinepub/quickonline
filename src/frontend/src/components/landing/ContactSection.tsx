import { Button } from '@/components/ui/button';
import { contactInfo } from './landingContent';
import { MessageCircle, Phone } from 'lucide-react';
import LandingSection from './LandingSection';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <LandingSection 
      id="contact"
      title="Ready to Grow Your Business?"
      subtitle="Get in touch with us today"
      className="bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Quick Action Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </Button>
          <Button 
            onClick={handleCall}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </LandingSection>
  );
}
