import React from 'react';

interface BuildABearLogoProps {
  className?: string;
  size?: number;
}

export const BuildABearLogo: React.FC<BuildABearLogoProps> = ({
  className = '',
  size = 140
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={`select-none ${className}`}
      aria-label="Build-A-Bear Workshop EST. 1997 Logo"
      role="img"
    >
      <defs>
        {/* Top text arc path for BUILD-A-BEAR */}
        {/* Sweeping clockwise across the top half of the ring */}
        <path
          id="bab-top-arc"
          d="M 38,120 A 82,82 0 0,1 202,120"
          fill="none"
        />

        {/* Bottom text arc path for EST. 1997 */}
        {/* Clockwise across the bottom half so letters face upright */}
        <path
          id="bab-bottom-arc"
          d="M 52,130 A 78,78 0 0,0 188,130"
          fill="none"
        />

        {/* Soft shadow for inner depth */}
        <filter id="bab-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Outer Glow / Soft Drop Shadow Ring */}
      <circle cx="120" cy="120" r="115" fill="#ffffff" filter="url(#bab-shadow)" />

      {/* White Ring Base */}
      <circle cx="120" cy="120" r="114" fill="#ffffff" />

      {/* Heavy Royal Blue Outer Border Ring */}
      <circle
        cx="120"
        cy="120"
        r="110"
        fill="none"
        stroke="#06489e"
        strokeWidth="9"
      />

      {/* Arched Top Text: BUILD-A-BEAR */}
      <text
        fill="#06489e"
        fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
        fontSize="17.5"
        fontWeight="900"
        letterSpacing="2.8"
      >
        <textPath href="#bab-top-arc" startOffset="50%" textAnchor="middle">
          BUILD-A-BEAR
        </textPath>
      </text>

      {/* Small TM / (R) mark */}
      <text
        x="193"
        y="98"
        fill="#06489e"
        fontFamily="sans-serif"
        fontSize="7"
        fontWeight="800"
      >
        ™
      </text>

      {/* Left Blue Paw Print */}
      <g transform="translate(39, 138) rotate(-18) scale(0.72)" fill="#06489e">
        {/* 4 Paw Toes */}
        <ellipse cx="6" cy="2" rx="2.2" ry="3.2" />
        <ellipse cx="12" cy="0" rx="2.4" ry="3.5" />
        <ellipse cx="18" cy="2" rx="2.2" ry="3.2" />
        <ellipse cx="23" cy="7" rx="2" ry="2.8" />
        {/* Main Paw Pad */}
        <path d="M6 14 C6 9, 10 7, 13.5 7 C17 7, 21 9, 21 14 C21 17, 18 19, 13.5 19 C9 19, 6 17, 6 14 Z" />
      </g>

      {/* Right Blue Paw Print */}
      <g transform="translate(182, 134) rotate(18) scale(0.72)" fill="#06489e">
        {/* 4 Paw Toes */}
        <ellipse cx="6" cy="7" rx="2" ry="2.8" />
        <ellipse cx="11" cy="2" rx="2.2" ry="3.2" />
        <ellipse cx="17" cy="0" rx="2.4" ry="3.5" />
        <ellipse cx="23" cy="2" rx="2.2" ry="3.2" />
        {/* Main Paw Pad */}
        <path d="M6 14 C6 9, 10 7, 13.5 7 C17 7, 21 9, 21 14 C21 17, 18 19, 13.5 19 C9 19, 6 17, 6 14 Z" />
      </g>

      {/* Arched Bottom Text: EST. 1997 */}
      <text
        fill="#06489e"
        fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
        fontSize="15"
        fontWeight="900"
        letterSpacing="3"
      >
        <textPath href="#bab-bottom-arc" startOffset="50%" textAnchor="middle">
          EST. 1997
        </textPath>
      </text>

      {/* Inner Royal Blue Border Line & Circle */}
      <circle
        cx="120"
        cy="120"
        r="68"
        fill="#06489e"
        stroke="#06489e"
        strokeWidth="2"
      />

      {/* Golden Yellow Bear Head / Mascot */}
      {/* Left Bear Ear */}
      <g>
        <circle cx="76" cy="98" r="19" fill="#f7a700" stroke="#d98900" strokeWidth="1" />
        {/* Inner ear royal blue cavity */}
        <circle cx="77" cy="99" r="9.5" fill="#06489e" />
      </g>

      {/* Right Bear Ear */}
      <g>
        <circle cx="164" cy="98" r="19" fill="#f7a700" stroke="#d98900" strokeWidth="1" />
        {/* Inner ear royal blue cavity */}
        <circle cx="163" cy="99" r="9.5" fill="#06489e" />
      </g>

      {/* Main Bear Head */}
      <ellipse cx="120" cy="120" rx="43" ry="38" fill="#f7a700" />

      {/* Head Top Fur Tuft */}
      <path
        d="M 112 83 Q 118 76 122 83 Q 128 75 132 85 Z"
        fill="#f7a700"
      />

      {/* Bear Eyes */}
      {/* Left Eye */}
      <g>
        <ellipse cx="103" cy="113" rx="4.5" ry="6" fill="#06489e" />
        {/* White eye highlight */}
        <circle cx="101.5" cy="111" r="1.6" fill="#ffffff" />
      </g>

      {/* Right Eye */}
      <g>
        <ellipse cx="137" cy="113" rx="4.5" ry="6" fill="#06489e" />
        {/* White eye highlight */}
        <circle cx="135.5" cy="111" r="1.6" fill="#ffffff" />
      </g>

      {/* Bear Muzzle (Soft Cream/Lighter Golden Area) */}
      <ellipse cx="120" cy="133" rx="23" ry="17" fill="#fde3ad" />

      {/* Blue Bear Nose */}
      <path
        d="M 113 124 C 113 121, 127 121, 127 124 C 127 129, 121 133, 120 133 C 119 133, 113 129, 113 124 Z"
        fill="#06489e"
      />
      {/* Nose soft shine */}
      <ellipse cx="118.5" cy="123" rx="2.5" ry="1" fill="#4b8de6" />

      {/* Blue Smiling Mouth Line */}
      <path
        d="M 114 138 Q 120 144 126 138"
        fill="none"
        stroke="#06489e"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
