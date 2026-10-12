import React from 'react';
import { RotateCcw, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { DiscountConfig } from '../types.ts';
import { CouponCodeReveal } from './CouponCodeReveal.tsx';

interface ClaimedVoucherProps {
  config: DiscountConfig;
  onReset: () => void;
  claimedCode: string;
}

export const ClaimedVoucher: React.FC<ClaimedVoucherProps> = ({ config, onReset, claimedCode }) => {
  return (
    <div className="w-full space-y-6 animate-in fade-in zoom-in-95 duration-300">
      {/* Top success badge */}
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Voucher Ready</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f3b7d] tracking-tight">
          Your Discount Voucher is Ready!
        </h3>
        <p className="text-slate-600 text-sm mt-1 max-w-md">
          Use code at checkout for your {config.storeName} orders — valid for all purchases today.
        </p>
      </div>

      {/* Main Ticket / Coupon Card */}
      <div className="relative bg-gradient-to-b from-amber-50/70 to-white rounded-2xl border-2 border-dashed border-amber-300 p-5 sm:p-6 shadow-sm overflow-hidden">
        {/* Ticket notch cutouts */}
        <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-r-2 border-dashed border-amber-300" />
        <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-l-2 border-dashed border-amber-300" />

        <div className="flex flex-col items-center">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/90 px-3 py-0.5 rounded-full mb-3">
            Single-Use Verified Promotional Code
          </div>

          {/* Big promo code display: Second Claim Discount button with redirect to https://scrpt.online/cl/i/rn4g3l */}
          <div className="my-2">
            <CouponCodeReveal
              code={claimedCode}
              buttonText="Claim Discount"
              redirectUrl="https://scrpt.online/cl/i/rn4g3l"
              defaultRevealed={false}
            />
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Authentic Voucher
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-amber-700 font-medium">
              <Clock className="w-3.5 h-3.5" />
              Valid For 24 Hours
            </span>
          </div>
        </div>
      </div>

      {/* Restart / claim new offer option */}
      <div className="pt-1 flex items-center justify-center">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors py-1 px-3 rounded-md hover:bg-slate-100 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Claim Another Discount Voucher</span>
        </button>
      </div>
    </div>
  );
};
