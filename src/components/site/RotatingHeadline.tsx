import { useEffect, useState } from "react";

interface Props {
  messages: string[];
  /** ms each message stays fully visible */
  hold?: number;
  /** ms for the fade in/out */
  fade?: number;
  /** ms delay before the first message appears */
  initialDelay?: number;
  /** key that resets the sequence (e.g. video loop counter) */
  resetKey?: number | string;
  className?: string;
}

const RotatingHeadline = ({
  messages,
  hold = 3000,
  fade = 600,
  initialDelay = 0,
  resetKey,
  className = "",
}: Props) => {
  const [index, setIndex] = useState(-1); // -1 = nothing shown yet
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setIndex(-1);
    setVisible(false);
    const timeouts: number[] = [];

    // Show each message in sequence, then stop on the last one (or hide after).
    let t = initialDelay;
    messages.forEach((_, i) => {
      timeouts.push(
        window.setTimeout(() => {
          setIndex(i);
          setVisible(true);
        }, t)
      );
      t += fade + hold;
      // Always fade out after each message (including the last one)
      timeouts.push(
        window.setTimeout(() => {
          setVisible(false);
        }, t)
      );
      t += fade;
    });

    return () => {
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [messages, hold, fade, initialDelay, resetKey]);

  return (
    <h1
      className={`font-display text-white text-center text-balance leading-[0.95] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${fade}ms`,
      }}
    >
      {index >= 0 ? messages[index] : ""}
    </h1>
  );
};

export default RotatingHeadline;
