import doodles from "@/assets/brand-doodles-dense.jpg";
import iceCream from "@/assets/icon-icecream.png";
import duck from "@/assets/icon-duck.png";
import ghost from "@/assets/icon-ghost.png";
import gift from "@/assets/icon-gift.png";
import tv from "@/assets/icon-tv.png";
import mic from "@/assets/icon-mic.png";
import mustache from "@/assets/icon-mustache.png";
import cat from "@/assets/icon-cat.png";
import camera from "@/assets/icon-camera.png";

/**
 * Doodles — full-bleed brand doodle wallpaper + a few floating icon cut-outs.
 * Use inside any `relative overflow-hidden` parent.
 *
 * `variant`:
 *  - "wallpaper": tiled doodle pattern (subtle), great for purple/dark hero
 *  - "scatter": only the floating icon cut-outs (no background pattern)
 */
type Props = { variant?: "wallpaper" | "scatter"; className?: string; tone?: "light" | "dark" };

const floaters = [
  { src: duck,     pos: "top-6 left-[6%]",         w: "w-20 md:w-28",  delay: "0s",   rot: "-8deg"  },
  { src: gift,     pos: "top-[18%] right-[8%]",    w: "w-24 md:w-32",  delay: "1.2s", rot: "12deg"  },
  { src: ghost,    pos: "top-1/2 left-[3%]",       w: "w-24 md:w-36",  delay: "2.4s", rot: "-6deg"  },
  { src: mic,      pos: "bottom-[12%] right-[5%]", w: "w-20 md:w-28",  delay: "0.6s", rot: "18deg"  },
  { src: tv,       pos: "bottom-[20%] left-[12%]", w: "w-16 md:w-24",  delay: "3s",   rot: "-14deg" },
  { src: cat,      pos: "top-[30%] right-[18%]",   w: "w-16 md:w-24",  delay: "1.8s", rot: "8deg"   },
  { src: mustache, pos: "bottom-[8%] left-[35%]",  w: "w-20 md:w-28",  delay: "2.1s", rot: "-4deg"  },
  { src: camera,   pos: "top-[10%] left-[45%]",    w: "w-16 md:w-20",  delay: "3.6s", rot: "10deg"  },
  { src: iceCream, pos: "top-[60%] right-[40%]",   w: "w-14 md:w-20",  delay: "1.5s", rot: "-10deg" },
];

const Doodles = ({ variant = "wallpaper", className = "", tone = "dark" }: Props) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    {variant === "wallpaper" && (
      <div
        className={`absolute inset-0 ${tone === "dark" ? "opacity-25 mix-blend-screen" : "opacity-30 mix-blend-multiply"}`}
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundSize: "640px",
          backgroundRepeat: "repeat",
        }}
      />
    )}
    {floaters.map((f, i) => (
      <img
        key={i}
        src={f.src}
        alt=""
        aria-hidden
        className={`absolute ${f.pos} ${f.w} animate-float drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]`}
        style={{ animationDelay: f.delay, transform: `rotate(${f.rot})` }}
      />
    ))}
  </div>
);

export default Doodles;
