export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orbitron Sciechem Limited",
    "alternateName": "Orbitron Sciechem",
    "url": "https://orbitronsciechem.com",
    "logo": "https://orbitronsciechem.com/logo.png",
    "description": "Multinational importer and distributor of industrial chemicals, food processing ingredients, laboratory equipment, pharmaceutical raw materials and industrial solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hillpark Business Park, Go-Down 4",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+254742651823",
        "contactType": "sales",
        "availableLanguage": "English"
      }
    ],
    "email": "info@orbitronsciechem.com",
    "telephone": "+254742651823",
    "areaServed": ["KE", "UG", "TZ", "RW", "ET", "SS"],
    "sameAs": [],
    "foundingLocation": "Nairobi, Kenya",
    "knowsAbout": [
      "Industrial Chemicals",
      "Food Ingredients",
      "Pharmaceutical Raw Materials",
      "Laboratory Equipment",
      "Water Treatment Chemicals",
      "Petroleum Chemicals"
    ]
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Orbitron Sciechem Limited",
    "image": "https://orbitronsciechem.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hillpark Business Park, Go-Down 4",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "telephone": "+254742651823",
    "email": "info@orbitronsciechem.com",
    "url": "https://orbitronsciechem.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
    </>
  );
}
