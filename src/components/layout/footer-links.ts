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
  { label: "LinkedIn", href: " https://www.linkedin.com/company/alfabetica/" },
  { label: "Instagram", href: "https://www.instagram.com/alfabetica.mx/" },
  { label: "Facebook", href: " https://www.facebook.com/alfabetica.mx/" },
];

export const contactEmail = "contacto@alfabetica.com.mx";