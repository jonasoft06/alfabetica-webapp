export type FooterLink = {
  label: string;
  href: string;
};

type ToggleableLink = FooterLink & { enabled: boolean };

const secondaryLinks: ToggleableLink[] = [
  { label: "FAQ", href: "#faq", enabled: false },
  { label: "Aviso de privacidad", href: "#", enabled: false },
];

export const enabledSecondaryLinks = secondaryLinks.filter(
  (link) => link.enabled
);

export const socialLinks: FooterLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export const contactEmail = "contacto@alfabetica.com.mx";