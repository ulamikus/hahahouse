import { useEffect, useState } from "react";

interface Props {
  messages: string[];
  /** ms each message stays fully visible */
  hold?: number;
  /** ms for the fade in/out */
  fade?: number;
  className?: string;
}

const RotatingHeadline = ({
  messages,
  hold = 3000,
  fade = 600,
  className = "",
}: Props) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (messages.length <= 1) return;
    const cycle = hold + fade;
    const id = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, fade);
    }, cycle);
    return () => clearInterval(id);
  }, [messages.length, hold, fade]);

  return (
    <h1
      className={`font-display text-white text-center text-balance leading-[0.95] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${fade}ms`,
      }}
    >
      {messages[index]}
    </h1>
  );
};

export default RotatingHeadline;
