import { useId } from 'react';

/** Original A/fan monogram. Uses the same geometry as the standalone SVG. */
export default function BrandMark({ size = 28, className = '' }: { size?: number; className?: string }) {
  const id = useId();
  return <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" focusable="false" style={{ flexShrink: 0 }}>
    <defs><linearGradient id={id} x1="7" y1="34" x2="43" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#ff2d7e" /><stop offset=".52" stopColor="#a855f7" /><stop offset="1" stopColor="#3b82f6" /></linearGradient></defs>
    <g fill={`url(#${id})`}>
      <path d="M5 40 20.2 8.4C21.8 5.2 26.2 5.2 27.8 8.4L38.1 29.8 28.6 26.1 24 16.5 12.7 40Z" />
      <path d="M17.3 29.5C24.8 23.2 33.3 23.4 39.7 28.1L43.2 35.4C34.5 29.1 26.9 29.4 20.7 34.7Z" />
      <path d="M20.9 38.2C27.7 32.7 35.5 32.6 42.5 36.8L45 42C37.2 38.2 30.4 37.9 24.2 42Z" />
    </g>
  </svg>;
}
