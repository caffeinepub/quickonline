import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from './landingContent';
import { Shield, Search, MessageCircle, Star, TrendingUp } from 'lucide-react';
import LandingSection from './LandingSection';

const iconMap = {
  shield: Shield,
  search: Search,
  message: MessageCircle,
  star: Star,
  trending: TrendingUp
};

export default function BenefitsSection() {
  return (
    <LandingSection 
      title="Why Your Shop Needs a Website"
      subtitle="Join thousands of local businesses growing online"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon as keyof typeof iconMap];
          return (
            <Card 
              key={index} 
              className="border-2 hover:border-blue-600 transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </LandingSection>
  );
}
