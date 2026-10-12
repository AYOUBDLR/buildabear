import React, { useState, useEffect } from 'react';
import { Tag, X } from 'lucide-react';
import { ClaimEvent } from '../types.ts';

const SAMPLE_CLAIMS: Omit<ClaimEvent, 'id' | 'timeAgo'>[] = [
  { name: 'Sarah M.', city: 'Austin, TX', discount: 'Store Discount' },
  { name: 'David K.', city: 'Chicago, IL', discount: 'Verified Voucher' },
  { name: 'Chloe L.', city: 'Seattle, WA', discount: 'Promotional Voucher' },
  { name: 'Marcus B.', city: 'Miami, FL', discount: 'Store Discount' },
  { name: 'Hannah R.', city: 'Denver, CO', discount: 'Verified Voucher' },
  { name: 'Liam P.', city: 'San Diego, CA', discount: 'Promotional Voucher' }
];

export const LiveClaimToasts: React.FC = () => {
  const [currentClaim, setCurrentClaim] = useState<ClaimEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first toast after 3.5 seconds
    const initialTimer = setTimeout(() => {
      triggerRandomToast();
    }, 3500);

    // Then interval every 18 seconds
    const interval = setInterval(() => {
      triggerRandomToast();
    }, 18000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  const triggerRandomToast = () => {
    if (dismissed) return;
    const randomItem = SAMPLE_CLAIMS[Math.floor(Math.random() * SAMPLE_CLAIMS.length)];
    const secondsAgo = Math.floor(8 + Math.random() * 25);
    setCurrentClaim({
      id: Math.random().toString(),
      name: randomItem.name,
      city: randomItem.city,
      discount: randomItem.discount,
      timeAgo: `${secondsAgo}s ago`
    });
    setIsVisible(true);

    // Auto hide after 4.5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 4500);
  };

  if (!currentClaim || !isVisible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/90 shadow-lg shadow-slate-900/5 text-xs text-slate-700">
        <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
          <Tag className="w-4 h-4" />
        </div>
        <div className="flex-1 pr-2">
          <div className="font-semibold text-slate-900">
            {currentClaim.name} <span className="font-normal text-slate-500">({currentClaim.city})</span>
          </div>
          <div className="text-[11px] text-emerald-700 font-medium">
            Claimed {currentClaim.discount} voucher · <span className="text-slate-400">{currentClaim.timeAgo}</span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setDismissed(true);
          }}
          className="text-slate-400 hover:text-slate-600 p-1"
          title="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
