import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from './landingContent';
import { Star, Quote } from 'lucide-react';
import LandingSection from './LandingSection';

export default function TestimonialsSection() {
  return (
    <LandingSection 
      title="What Our Clients Say"
      subtitle="Real results from real shopkeepers"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index}
            className="border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-xl relative"
          >
            <CardContent className="pt-6 space-y-4">
              <Quote className="h-10 w-10 text-blue-600 opacity-20" />
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
                <p className="text-sm text-blue-600">{testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </LandingSection>
  );
}
