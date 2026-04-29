import { ReactNode } from "react";

/**
 * Sticker — rotated starburst / pill / arrow label inspired by the
 * HaHaHouse sticker sheet. Drop into any `relative` parent and position
 * with className.
 */
type Variant = "starburst" | "pill" | "arrow" | "circle";
type Color = "red" | "yellow" | "turquoise" | "green" | "primary" | "navy" | "white";

const colorMap: Record<Color, string> = {
  red: "bg-red text-white",
  yellow: "bg-yellow text-navy",
  turquoise: "bg-turquoise text-navy",
  green: "bg-green text-navy",
  primary: "bg-primary text-white",
  navy: "bg-navy text-white",
  white: "bg-white text-primary",
};

const Sticker = ({
  children,
  variant = "starburst",
  color = "red",
  rotate = -8,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  rotate?: number;
  className?: string;
}) => {
  const tone = colorMap[color];

  if (variant === "starburst") {
    // 12-point burst via clip-path
    const points = Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2;
      const r = i % 2 === 0 ? 50 : 38;
      const x = 50 + r * Math.cos(angle);
      const y = 50 + r * Math.sin(angle);
      return `${x}% ${y}%`;
    }).join(", ");
    return (
      <div
        className={`grid place-items-center font-display font-black leading-tight text-center px-6 py-6 ${tone} ${className}`}
        style={{ clipPath: `polygon(${points})`, transform: `rotate(${rotate}deg)` }}
      >
        {children}
      </div>
    );
  }

  if (variant === "circle") {
    return (
      <div
        className={`grid place-items-center rounded-full font-display font-black text-center px-5 py-5 border-4 border-current ${tone} ${className}`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {children}
      </div>
    );
  }

  if (variant === "arrow") {
    return (
      <div
        className={`relative inline-block font-display font-black px-7 py-3 border-4 border-current ${tone} ${className}`}
        style={{
          transform: `rotate(${rotate}deg)`,
          clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
        }}
      >
        {children}
      </div>
    );
  }

  // pill
  return (
    <div
      className={`inline-block rounded-full font-display font-black px-6 py-2 border-4 border-current ${tone} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
};

export default Sticker;
