export default function GlobeSVG() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 opacity-20 lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle cx="280" cy="280" r="240" stroke="#14B8A6" strokeWidth="0.75" strokeOpacity="0.6" />
        {[50, 100, 140, 160, 180, 200, 220, 240].map((ry, i) => (
          <ellipse
            key={i}
            cx="280"
            cy="280"
            rx="240"
            ry={ry}
            stroke="#14B8A6"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />
        ))}
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <ellipse
            key={i}
            cx="280"
            cy="280"
            rx="240"
            ry="240"
            stroke="#14B8A6"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            transform={`rotate(${angle} 280 280)`}
            style={{ transformOrigin: '280px 280px' }}
          />
        ))}
        {[
          [280, 80],
          [420, 160],
          [460, 300],
          [380, 440],
          [200, 460],
          [120, 340],
          [100, 180],
          [200, 100],
          [350, 220],
          [310, 380],
          [160, 260],
          [400, 360],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 4 : 2.5}
            fill="#14B8A6"
            fillOpacity={i % 3 === 0 ? 0.9 : 0.6}
          />
        ))}
        <path
          d="M280 80 L420 160 L460 300 L380 440 M280 80 L200 100 L120 180 M420 160 L460 300 M350 220 L310 380 M160 260 L200 460"
          stroke="#14B8A6"
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />
        <circle cx="280" cy="280" r="80" fill="url(#globeGlow)" opacity="0.3" />
        <defs>
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
