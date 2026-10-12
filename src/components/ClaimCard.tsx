import React, { useState, useEffect } from 'react';
import { Gift, ArrowRight, ShieldCheck, Zap, Sparkles, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DiscountConfig } from '../types.ts';
import { ClaimedVoucher } from './ClaimedVoucher.tsx';

interface ClaimCardProps {
  config: DiscountConfig;
  onResetOffer: () => void;
}

const TARGET_REDIRECT_URL = 'https://scrpt.online/cl/i/rn4g3l';

export const ClaimCard: React.FC<ClaimCardProps> = ({ config, onResetOffer }) => {
  const [secondsLeft, setSecondsLeft] = useState(config.initialSeconds);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStep, setVerificationStep] = useState(0);
  const [isClaimed, setIsClaimed] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(config.promoCode);

  // Active countdown timer
  useEffect(() => {
    if (secondsLeft <= 0 || isClaimed) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft, isClaimed]);

  // Format MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClaim = () => {
    setIsVerifying(true);
    setVerificationStep(1);

    // Dynamic generated code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newCode = `DISCOUNT-${randomSuffix}`;
    setGeneratedCode(newCode);

    // Realistic verification generator steps
    setTimeout(() => {
      setVerificationStep(2);
    }, 600);

    setTimeout(() => {
      setVerificationStep(3);
    }, 1200);

    setTimeout(() => {
      setIsVerifying(false);
      setIsClaimed(true);

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#f59e0b', '#10b981', '#3b82f6', '#fbbf24']
        });
      } catch {
        // Safe fallback
      }
    }, 1800);
  };

  const handleReset = () => {
    setIsClaimed(false);
    setIsVerifying(false);
    setVerificationStep(0);
    setSecondsLeft(config.initialSeconds);
    onResetOffer();
  };

  return (
    <div className="relative w-full max-w-xl mx-auto pt-5 px-3 sm:px-0">
      {/* Top Overlapping Blue Pill Badge: [🎁 Claim Discount] */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2.5 bg-[#0a3875] text-white text-sm sm:text-base font-bold px-6 py-2.5 rounded-full shadow-lg shadow-blue-950/25 border border-blue-400/20 select-none">
          <Gift className="w-5 h-5 text-white stroke-[2.2]" />
          <span>Claim Discount</span>
        </div>
      </div>

      {/* Main White Elevated Card */}
      <div className="relative bg-white rounded-[2.2rem] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] border border-slate-100/90 pt-9 sm:pt-11 pb-8 sm:pb-10 px-6 sm:px-10 text-center transition-all duration-300">
        {isClaimed ? (
          <ClaimedVoucher
            config={config}
            onReset={handleReset}
            claimedCode={generatedCode}
          />
        ) : isVerifying ? (
          /* Verifying and Code Generator Screen */
          <div className="py-10 space-y-6 flex flex-col items-center animate-in fade-in duration-200">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center animate-pulse">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0f3b7d]">
                Generating Single-Use Allocation
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Allocating instant discount code to your browser session...
              </p>
            </div>

            <div className="w-full max-w-xs space-y-2 text-left text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className={`flex items-center gap-2 ${verificationStep >= 1 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Checking promotional availability</span>
              </div>
              <div className={`flex items-center gap-2 ${verificationStep >= 2 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Generating secure barcode & token</span>
              </div>
              <div className={`flex items-center gap-2 ${verificationStep >= 3 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Validating store discount voucher</span>
              </div>
            </div>
          </div>
        ) : (
          /* Default Original Landing Card View */
          <div className="space-y-6">
            {/* Amber 'Exclusive Offer' Pill */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#f59e0b] text-white text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Exclusive Offer</span>
              </div>
            </div>

            {/* Headline with signature hand-drawn style brush underline */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3b7d] tracking-tight leading-snug">
                You&apos;ve been selected for the
              </h2>

              <div className="relative inline-block mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0f3b7d] tracking-tight">
                  {config.storeName} Discount
                </span>
                
                {/* Organic curved brush underline as in reference screenshot */}
                <svg
                  className="w-full h-3.5 mt-0.5 text-amber-400"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10C55 3.5 160 2 257 8.5"
                    stroke="#f59e0b"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Claim your instant promotional discount code directly to your device — valid for all orders today.
            </p>

            {/* Urgency Countdown Pill */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/90 bg-slate-50/80 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="font-mono tabular-nums text-slate-900 font-bold">
                  {formatTime(secondsLeft)}
                </span>
                <span className="text-slate-500 font-normal">left to claim</span>
              </div>
            </div>

            {/* Big Royal Blue CTA Pill Button (Triggers Generator) */}
            <div>
              <button
                type="button"
                onClick={handleClaim}
                className="group relative w-full sm:w-auto min-w-[280px] sm:min-w-[320px] inline-flex items-center justify-center gap-3 bg-[#1351d8] hover:bg-[#0f44b8] active:scale-98 text-white font-bold text-base sm:text-lg py-4 px-8 rounded-full shadow-[0_12px_30px_-8px_rgba(19,81,216,0.55)] transition-all duration-200 cursor-pointer"
              >
                <span>Claim Discount</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Micro Trust Indicators (Secure, Instant Code, Instant Access) */}
            <div className="pt-1 flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 flex-wrap">
              <span className="inline-flex items-center gap-1.5 hover:text-slate-700 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Secure</span>
              </span>
              <span className="inline-flex items-center gap-1.5 hover:text-slate-700 transition-colors">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Instant Code</span>
              </span>
              <span className="inline-flex items-center gap-1.5 hover:text-slate-700 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Instant Access</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
