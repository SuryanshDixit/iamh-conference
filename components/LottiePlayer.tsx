"use client";
import { useEffect, useRef } from "react";

interface Props {
  src: string;
  style?: React.CSSProperties;
}

export default function LottiePlayer({ src, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any;
    import("lottie-web").then((lottie) => {
      if (!ref.current) return;
      ref.current.innerHTML = "";
      anim = lottie.default.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: src,
      });
    });
    return () => {
      anim?.destroy();
    };
  }, [src]);

  return (
    <div
      ref={ref}
      style={{ width:"100%", height:"100%", ...style }}
    />
  );
}