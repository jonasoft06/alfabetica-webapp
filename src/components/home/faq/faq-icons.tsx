type IconProps = { className?: string };

/** Triángulo relleno, apunta hacia abajo. Estado cerrado. */
export function IconQuestion({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 14.94 11.38"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="0 0 7.11 11.38 14.94 0 0 0" />
    </svg>
  );
}

/** Triángulo de contorno, apunta hacia arriba. Estado abierto. */
export function IconAnswered({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16.79 12.79"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      aria-hidden="true"
    >
      <polygon points="15.89 12.29 8.77 .91 .95 12.29 15.89 12.29" />
    </svg>
  );
}