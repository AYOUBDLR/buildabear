import React, { useState } from 'react';
import officialBuildABearLogo from '../assets/images/build-a-bear-logo.png';
import { BuildABearLogo } from './BuildABearLogo.tsx';

interface BrandBadgeProps {
  storeName: string;
}

export const BrandBadge: React.FC<BrandBadgeProps> = ({ storeName }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative group transition-transform duration-300 hover:scale-105">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white p-1.5 shadow-[0_14px_35px_rgba(6,72,158,0.18)] border-2 border-slate-100/90 flex items-center justify-center overflow-hidden">
          {!imgError ? (
            <img
              src={officialBuildABearLogo}
              alt={`${storeName} Official Logo`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain select-none"
            />
          ) : (
            <BuildABearLogo size={140} />
          )}
        </div>
      </div>
    </div>
  );
};


