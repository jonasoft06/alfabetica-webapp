export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alfabética",
    url: "https://alfabetica.com.mx",
    logo: "https://alfabetica.com.mx/icon.png",
    sameAs: [
      "https://www.linkedin.com/company/alfabetica/",
      "https://www.instagram.com/alfabetica.mx/",
      "https://www.facebook.com/alfabetica.mx/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}