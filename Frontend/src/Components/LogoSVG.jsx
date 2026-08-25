/**
 * DriveVital inline SVG logo — DV mark with speed lines.
 * Pure SVG, no background, works on dark and light themes.
 * Colors use brand palette: navy #1C2E4A + orange #F05A28
 */
export default function LogoSVG({ height = 44 }) {
  const ratio = 180 / 80; // viewBox aspect
  const width = height * ratio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DriveVital"
      role="img"
    >
      {/* ── Speed lines (left of D) ── */}
      {/* Orange top line */}
      <rect x="2"  y="26" width="28" height="7" rx="3.5" fill="#F05A28"/>
      {/* Navy bottom line */}
      <rect x="8"  y="40" width="22" height="6" rx="3"   fill="#1C2E4A"/>
      {/* Short navy upper-mid line */}
      <rect x="14" y="14" width="14" height="5" rx="2.5" fill="#1C2E4A"/>

      {/* ── D letter (bold, rounded) ── */}
      {/* Outer D shape */}
      <path
        d="M38 8 H62 C80 8 92 22 92 40 C92 58 80 72 62 72 H38 Z"
        fill="#1C2E4A"
      />
      {/* Inner cutout to make hollow D */}
      <path
        d="M52 22 H62 C72 22 78 30 78 40 C78 50 72 58 62 58 H52 Z"
        fill="white"
      />
      {/* Small dark D inner fill — gives the bold chunky look */}
      <path
        d="M52 30 H62 C67 30 70 34 70 40 C70 46 67 50 62 50 H52 Z"
        fill="#1C2E4A"
      />

      {/* ── V / checkmark (orange) ── */}
      {/* Left stroke of V going down */}
      <polygon
        points="100,12  118,12  128,52  118,52"
        fill="#F05A28"
      />
      {/* Right stroke of V going up-right */}
      <polygon
        points="118,52  128,52  162,8  152,8"
        fill="#F05A28"
      />
      {/* Arrow tip pointing down-left (makes it a checkmark/V hybrid) */}
      <polygon
        points="112,72  128,72  128,52  118,52"
        fill="#F05A28"
      />
    </svg>
  );
}
