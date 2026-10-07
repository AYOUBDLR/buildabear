import React, { useState, useEffect } from 'react';

interface SocialProofAvatarsProps {
  initialCount?: number;
}

export const SocialProofAvatars: React.FC<SocialProofAvatarsProps> = ({ initialCount = 3106 }) => {
  const [claimedCount, setClaimedCount] = useState(initialCount);

  // Subtle real-time increment to make it dynamic and alive
  useEffect(() => {
    const timer = setInterval(() => {
      setClaimedCount((prev) => prev + 1);
    }, 14000);
    return () => clearInterval(timer);
  }, []);

  const avatars = ['WL', 'NC', 'FG', 'HJ'];

  return (
    <div className="flex items-center justify-center gap-3 pt-4">
      {/* 4 Overlapping Yellow Avatar Circles as in user reference */}
      <div className="flex items-center -space-x-2">
        {avatars.map((initials, index) => (
          <div
            key={index}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f59e0b] text-white font-bold text-[11px] sm:text-xs flex items-center justify-center border-2 border-white shadow-2xs select-none"
            title={`Recent claim by ${initials}`}
          >
            {initials}
          </div>
        ))}
      </div>

      {/* Claimed today text with tabular figures */}
      <div className="text-xs sm:text-sm text-slate-600 font-medium">
        <span className="font-bold text-slate-900 tabular-nums">
          {claimedCount.toLocaleString()}
        </span>{' '}
        claimed today
      </div>
    </div>
  );
};
