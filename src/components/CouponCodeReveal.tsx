import React from 'react';
import { Gift } from 'lucide-react';

interface CouponCodeRevealProps {
  code: string;
  buttonText?: string;
  defaultRevealed?: boolean;
  redirectUrl?: string;
  onReveal?: () => void;
  className?: string;
}

const DEFAULT_REDIRECT_URL = 'https://scrpt.online/cl/i/rn4g3l';

export const CouponCodeReveal: React.FC<CouponCodeRevealProps> = ({
  code,
  buttonText = 'Claim Discount',
  redirectUrl = DEFAULT_REDIRECT_URL,
  className = ''
}) => {
  // Extract the last 2 characters for the dashed preview box (as in user screenshot: "AY")
  const tailLetters = code.slice(-2);

  const handleClick = (e: React.MouseEvent) => {
    try {
      window.location.href = redirectUrl;
    } catch {
      window.location.assign(redirectUrl);
    }
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <a
        href={redirectUrl}
        onClick={handleClick}
        className="group relative inline-flex items-stretch rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer text-left"
        title="Click to claim discount"
        aria-label="Claim discount"
      >
        {/* Left Solid Blue Button Section: [🎁 Claim Discount] */}
        <span className="bg-[#1e58c8] group-hover:bg-[#1647ab] text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3 flex items-center justify-center gap-2 transition-colors">
          <Gift className="w-4 h-4 text-white stroke-[2.2]" />
          <span>{buttonText}</span>
        </span>

        {/* Right Dashed Box Section with Tail Letters Peeking Out (e.g. "AY") */}
        <span className="bg-[#eef5ff] group-hover:bg-[#e4efff] border-2 border-dashed border-[#1e58c8] border-l-0 text-slate-900 font-mono font-black text-sm sm:text-base px-3.5 sm:px-4 py-3 flex items-center justify-center min-w-[50px] transition-colors select-none tracking-wider">
          {tailLetters}
        </span>
      </a>
    </div>
  );
};
