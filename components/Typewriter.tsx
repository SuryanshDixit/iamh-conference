"use client";
import { useEffect, useState } from "react";

interface Props {
  words: string[];
  speed?: number;
  pause?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function Typewriter({ words, speed = 80, pause = 1800, style, className }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
      } else {
        setWordIdx((wordIdx + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIdx, words, speed, pause]);

  return (
    <span className={className} style={style}>
      {displayed}
      <span style={{
        display: "inline-block", width: 2, height: "1em",
        background: "currentColor", marginLeft: 2,
        animation: "blink 1s step-end infinite", verticalAlign: "text-bottom",
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}
