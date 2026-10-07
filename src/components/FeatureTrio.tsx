import React from 'react';
import { Tag, Star, Sparkles } from 'lucide-react';

export const FeatureTrio: React.FC = () => {
  const features = [
    {
      icon: <Tag className="w-6 h-6 sm:w-7 sm:h-7 text-amber-950 stroke-[2.2]" />,
      label: 'Instant Savings'
    },
    {
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 text-amber-950 stroke-[2.2]" />,
      label: 'Storewide Valid'
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-amber-950 stroke-[2.2]" />,
      label: 'Free Shipping'
    }
  ];

  return (
    <div className="flex items-center justify-center gap-8 sm:gap-14 pt-8 pb-4">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2.5 group">
          {/* Yellow Rounded Square as in reference image */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ffbe1a] group-hover:bg-[#f5b314] shadow-sm flex items-center justify-center transition-all duration-200 group-hover:scale-105">
            {item.icon}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-tight text-center">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
