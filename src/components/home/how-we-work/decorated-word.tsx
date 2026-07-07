// src/components/home/how-we-work/decorated-word.tsx
import Image from "next/image";

type DecoratedWordProps = {
  children: React.ReactNode; // la palabra a decorar
  decoration: string; // ruta al SVG (óvalo o subrayado)
  variant: "circle" | "underline";
};

export default function DecoratedWord({
  children,
  decoration,
  variant,
}: DecoratedWordProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <Image
        src={decoration}
        alt=""
        width={200}
        height={60}
        className={
          variant === "circle"
            ? "absolute left-1/2 top-1/2 z-0 w-[115%] max-w-none -translate-x-1/2 -translate-y-1/2"
            : "absolute left-0 top-full z-0 w-full max-w-none -translate-y-1"
        }
      />
    </span>
  );
}