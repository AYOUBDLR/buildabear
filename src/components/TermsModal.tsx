import React from 'react';
import { X, CheckCircle, Shield, Award, Clock } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeName: string;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, storeName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <h3 id="terms-title" className="font-bold text-slate-900 text-base">
              Verified Discount Guarantee
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-start gap-3 p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-blue-900">
            <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-950">Official Single-Click Discount</p>
              <p className="text-xs text-blue-800 mt-0.5">
                This promotional voucher is issued directly with no questionnaire, questionnaire scoring, survey loops, or subscription traps.
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
              Terms & Redemption Guidelines:
            </h4>
            <ul className="space-y-2 text-slate-600 list-disc pl-4 text-xs">
              <li>
                <strong>Immediate Activation:</strong> Promotional voucher codes are unlocked instantaneously upon clicking the claim button.
              </li>
              <li>
                <strong>No Mandatory Survey:</strong> Customers are never required to complete marketing surveys or rewards points programs to redeem.
              </li>
              <li>
                <strong>Storewide Applicability:</strong> Valid across standard product collections at {storeName} checkout, subject to merchant terms.
              </li>
              <li>
                <strong>Limit:</strong> One single-use voucher per visitor IP session every 24 hours.
              </li>
            </ul>
          </div>

          <div className="pt-2 flex items-center justify-between text-slate-400 text-[11px] border-t border-slate-100">
            <span>Certificate ID: #DISC-VCH-2025</span>
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle className="w-3.5 h-3.5" /> Verified Active
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
