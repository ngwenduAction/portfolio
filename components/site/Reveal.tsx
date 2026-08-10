import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
  "--reveal-distance": string;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
}: RevealProps) {
  const style: RevealStyle = {
    "--reveal-delay": `${delay}s`,
    "--reveal-distance": `${distance}px`,
  };

  return (
    <div className={className} data-reveal="" style={style}>
      {children}
    </div>
  );
}
