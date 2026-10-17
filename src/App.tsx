/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid.tsx';
import { BrandBadge } from './components/BrandBadge.tsx';
import { SocialProofAvatars } from './components/SocialProofAvatars.tsx';
import { ClaimCard } from './components/ClaimCard.tsx';
import { FeatureTrio } from './components/FeatureTrio.tsx';
import { TermsModal } from './components/TermsModal.tsx';
import { InfoModals } from './components/InfoModals.tsx';
import { DiscountConfig } from './types.ts';
import { CheckCircle2 } from 'lucide-react';

const INITIAL_CONFIG: DiscountConfig = {
  storeName: 'Build-A-Bear',
  discountType: 'percentage',
  discountValue: 0,
  discountHeadline: '🏷️ Claim Discount',
  initialSeconds: 638, // 10 minutes 38 seconds as shown in reference image
  promoCode: 'DISCOUNT-TODAY',
  freeShipping: true
};

export default function App() {
  const [config, setConfig] = useState<DiscountConfig>(INITIAL_CONFIG);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'how-it-works' | 'faq' | null>(null);

  const handleResetOffer = () => {
    // Reset or refresh configuration state if needed
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-x-hidden">
      {/* Atmospheric Background with Subtle Grid & Floating Motifs */}
      <BackgroundGrid />

      {/* Main Mobile-Optimized Content Area */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 pt-8 sm:pt-12 pb-16 relative z-10 max-w-md sm:max-w-xl mx-auto w-full">
        {/* Circular Brand Seal / Emblem (Build-A-Bear Logo) */}
        <BrandBadge storeName={config.storeName} />

        {/* Social Proof: 4 Overlapping Avatar Circles + Claimed Counter */}
        <SocialProofAvatars initialCount={3106} />

        {/* Central Claim Card */}
        <div className="w-full mt-4">
          <ClaimCard
            config={config}
            onResetOffer={handleResetOffer}
          />
        </div>

        {/* Feature Trio: 3 Yellow Rounded Squares */}
        <div className="w-full mt-2">
          <FeatureTrio />
        </div>

        {/* Verified Footer */}
        <footer className="mt-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>Made with love.</span>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="inline-flex items-center gap-1 text-[#0f3b7d] hover:text-blue-700 font-semibold cursor-pointer transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Offer</span>
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={() => setInfoModalType('how-it-works')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={() => setInfoModalType('faq')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>
          <div className="text-[11px] text-slate-400">
            © {config.storeName} Workshop 2025 · Mobile Voucher Portal
          </div>
        </footer>
      </main>

      {/* Terms and Verification Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        storeName={config.storeName}
      />

      {/* Info Modals (How it works / FAQ) */}
      <InfoModals
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
        storeName={config.storeName}
      />
    </div>
  );
}
