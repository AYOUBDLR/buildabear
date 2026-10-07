import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Delicate grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Warm gentle amber glow on top left */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.75) 0%, rgba(253, 230, 138, 0.3) 50%, transparent 70%)'
        }}
      />

      {/* Gentle sky blue glow on right / center */}
      <div 
        className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(191, 219, 254, 0.8) 0%, rgba(219, 234, 254, 0.3) 55%, transparent 75%)'
        }}
      />

      {/* Soft floating decorative motifs (Build-A-Bear paw prints matching the reference image) */}
      {/* Top left blue paw */}
      <div className="absolute top-16 left-6 md:left-20 text-blue-400/50 transform -rotate-12">
        <svg width="32" height="32" viewBox="0 0 30 30" fill="currentColor">
          <circle cx="6" cy="10" r="2.8" />
          <circle cx="12" cy="5" r="3.2" />
          <circle cx="19" cy="5" r="3.2" />
          <circle cx="25" cy="10" r="2.8" />
          <path d="M7 19 C7 13.5, 10.5 11, 15.5 11 C20.5 11, 24 13.5, 24 19 C24 23.5, 20 26, 15.5 26 C11 26, 7 23.5, 7 19 Z" />
        </svg>
      </div>

      {/* Top right amber paw */}
      <div className="absolute top-44 right-8 md:right-28 text-amber-400/50 transform rotate-20">
        <svg width="28" height="28" viewBox="0 0 30 30" fill="currentColor">
          <circle cx="6" cy="10" r="2.8" />
          <circle cx="12" cy="5" r="3.2" />
          <circle cx="19" cy="5" r="3.2" />
          <circle cx="25" cy="10" r="2.8" />
          <path d="M7 19 C7 13.5, 10.5 11, 15.5 11 C20.5 11, 24 13.5, 24 19 C24 23.5, 20 26, 15.5 26 C11 26, 7 23.5, 7 19 Z" />
        </svg>
      </div>

      {/* Mid left amber paw */}
      <div className="absolute top-[55%] left-8 md:left-24 text-amber-400/40 transform 15">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <circle cx="6" cy="10" r="2.8" />
          <circle cx="12" cy="5" r="3.2" />
          <circle cx="19" cy="5" r="3.2" />
          <circle cx="25" cy="10" r="2.8" />
          <path d="M7 19 C7 13.5, 10.5 11, 15.5 11 C20.5 11, 24 13.5, 24 19 C24 23.5, 20 26, 15.5 26 C11 26, 7 23.5, 7 19 Z" />
        </svg>
      </div>

      {/* Bottom right blue paw */}
      <div className="absolute bottom-28 right-10 md:right-32 text-blue-400/50 transform -rotate-15">
        <svg width="34" height="34" viewBox="0 0 30 30" fill="currentColor">
          <circle cx="6" cy="10" r="2.8" />
          <circle cx="12" cy="5" r="3.2" />
          <circle cx="19" cy="5" r="3.2" />
          <circle cx="25" cy="10" r="2.8" />
          <path d="M7 19 C7 13.5, 10.5 11, 15.5 11 C20.5 11, 24 13.5, 24 19 C24 23.5, 20 26, 15.5 26 C11 26, 7 23.5, 7 19 Z" />
        </svg>
      </div>

      {/* Tiny subtle sparkle in bottom left */}
      <div className="absolute bottom-12 left-16 text-amber-300/40">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 6.8L21 11.2l-5.4 4.8L17.2 22 12 18.4 6.8 22l1.6-6-5.4-4.8 6.6-2.4L12 2z" />
        </svg>
      </div>
    </div>
  );
};
