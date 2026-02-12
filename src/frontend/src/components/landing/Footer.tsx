import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'quickonline-app';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img 
            src="/assets/generated/quickonline-logo.dim_512x256.png" 
            alt="QuickOnline" 
            className="h-10 w-auto opacity-90"
          />

          {/* Tagline */}
          <p className="text-gray-400 text-center text-lg">
            Helping local businesses grow online
          </p>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-gray-700"></div>

          {/* Copyright and Attribution */}
          <div className="flex flex-col items-center space-y-2 text-sm text-gray-400">
            <p>© {currentYear} QuickOnline. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
