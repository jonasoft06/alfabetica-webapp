
import Image from "next/image";

type DecoratedWordProps = {
  children: React.ReactNode;
  decoration: string;
  variant?: "circle" | "underline";
  width?: number;
  height?: number;
  widthClass?: string;
  decorationOnTop?: boolean;
};

export default function DecoratedWord({
  children,
  decoration,
  variant = "circle",
  width = 200,
  height = 60,
  widthClass = "w-[105%]",
  decorationOnTop = false,
}: DecoratedWordProps) {
  const wordZ = decorationOnTop ? "z-0" : "z-10";
  const decorationZ = decorationOnTop ? "z-10" : "z-0";

  return (
    <span className="relative inline-block">
      <span className={`relative ${wordZ}`}>{children}</span>
      <Image
        src={decoration}
        alt=""
        aria-hidden
        width={width}
        height={height}
        className={
          variant === "circle"
            ? `absolute left-1/2 top-1/2 ${decorationZ} ${widthClass} max-w-none -translate-x-1/2 -translate-y-1/2`
            : `absolute left-0 top-full ${decorationZ} w-full max-w-none -translate-y-1`
        }
      />
    </span>
  );
}