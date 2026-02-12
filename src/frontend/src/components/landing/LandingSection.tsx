import { ReactNode } from 'react';

interface LandingSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function LandingSection({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}: LandingSectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
