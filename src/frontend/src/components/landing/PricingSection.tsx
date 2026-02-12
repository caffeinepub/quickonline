import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { pricingTiers } from './landingContent';
import { Check } from 'lucide-react';
import LandingSection from './LandingSection';

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LandingSection 
      title="Choose Your Package"
      subtitle="Affordable pricing for every business size"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <Card 
            key={index}
            className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
              tier.recommended 
                ? 'border-blue-600 shadow-xl scale-105 md:scale-110' 
                : 'border-gray-200 hover:border-blue-400'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  RECOMMENDED
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-2">{tier.icon}</div>
              <CardTitle className="text-2xl font-black text-gray-900 mb-2">
                {tier.name}
              </CardTitle>
              <div className="text-4xl font-black text-blue-600">
                {tier.price}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                className={`w-full font-bold py-6 rounded-xl transition-all duration-300 ${
                  tier.recommended
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {tier.ctaText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </LandingSection>
  );
}
