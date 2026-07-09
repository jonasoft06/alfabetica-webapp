import Link from "next/link";

import { enabledNavLinks, quoteLink } from "./nav-links";
import { contactEmail, enabledSecondaryLinks, socialLinks } from "./footer-links";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./footer-icons";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

const primaryLinks = [...enabledNavLinks, quoteLink];

export function SiteFooter() {
  return (
    <footer className="relative w-full bg-alf-turquoise px-6 py-10 text-alf-near-white lg:px-12 lg:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <nav aria-label="Enlaces del sitio">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-20">
            <ul className="space-y-0.5 text-sm">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="capitalize hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {enabledSecondaryLinks.length > 0 && (
              <ul className="space-y-0.5 text-sm">
                {enabledSecondaryLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-5">
          <a href={`mailto:${contactEmail}`} className="text-sm hover:underline">
            {contactEmail}
          </a>

          <ul className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="block transition-opacity hover:opacity-70"
                  >
                    <Icon className="size-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-2 left-2 size-3 rounded-full border border-alf-near-white"
      />
      <span
        aria-hidden="true"
        className="absolute right-2 bottom-2 size-3 rounded-full border border-alf-near-white"
      />
    </footer>
  );
}