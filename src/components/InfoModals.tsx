import React from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, Tag } from 'lucide-react';

interface InfoModalProps {
  type: 'how-it-works' | 'faq' | null;
  onClose: () => void;
  storeName: string;
}

export const InfoModals: React.FC<InfoModalProps> = ({ type, onClose, storeName }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            {type === 'how-it-works' ? 'How the Discount Claim Works' : 'Frequently Asked Questions'}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600 max-h-[75vh] overflow-y-auto">
          {type === 'how-it-works' ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Click &apos;Claim Discount&apos;</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Just tap the button to initiate your instant verified allocation directly to your device.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Get Your Verified Promo Code</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your code and digital barcode generate immediately on-screen with single-click clipboard copying.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Redeem at Checkout</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Paste into the promotional box at {storeName} checkout or scan the barcode in-store to take immediate savings off your total.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5">
              <div>
                <h4 className="font-bold text-slate-900">How do I claim my discount?</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Simply tap the Claim Discount button and your single-use code is immediately generated and ready to use.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Is there a minimum purchase required?</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  No minimum order amount is required. The discount code applies to all standard eligible catalog items.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">How long is the voucher code valid?</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Once claimed, each single-use voucher code is reserved for 24 hours before returning to the public promotion pool.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Can I combine this with free shipping?</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Yes, all active promotional discount codes generated on this page include complimentary standard shipping.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
