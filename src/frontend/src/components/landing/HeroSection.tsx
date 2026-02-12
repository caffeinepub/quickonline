import { Button } from '@/components/ui/button';
import { heroContent } from './landingContent';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      {/* Header with Logo */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <img 
            src="/assets/generated/quickonline-logo.dim_512x256.png" 
            alt="QuickOnline" 
            className="h-10 w-auto sm:h-12"
          />
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {heroContent.headline}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {heroContent.subheadline}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {heroContent.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {heroContent.trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/generated/quickonline-hero-illustration.dim_1600x900.png" 
                alt="Professional Website Design" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
