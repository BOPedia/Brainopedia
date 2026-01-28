import React, { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';

interface DonationBannerProps {
  onNavigateToDonate: () => void;
}

export function DonationBanner({ onNavigateToDonate }: DonationBannerProps) {
  const [isVisible, setIsVisible] = useState(true); // Changed to true to always show

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = localStorage.getItem('donation-banner-dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('donation-banner-dismissed', 'true');
  };

  const handleDonate = () => {
    onNavigateToDonate();
    handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#faf0e3] border-b-2 border-[#0c264d]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-1.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="#2abcd4" />
            <p className="text-xs text-[#0c264d]">
              <strong>Help keep Brainopedia free and accessible.</strong> If everyone reading this gave just <strong>$5</strong>, we could continue providing valuable resources for the neurodivergent community.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDonate}
              className="bg-[#0c264d] text-white px-3 py-1 rounded-md hover:bg-[#0c264d]/90 transition-colors flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold"
            >
              <Heart className="w-3 h-3" />
              <span>Donate Now</span>
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-[#0c264d]/10 rounded-md transition-colors"
              aria-label="Dismiss donation banner"
            >
              <X className="w-4 h-4 text-[#0c264d]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}