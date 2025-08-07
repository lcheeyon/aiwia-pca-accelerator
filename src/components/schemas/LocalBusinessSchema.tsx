interface BusinessHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: BusinessHours[];
  services?: string[];
  foundingDate?: string;
  employees?: string;
}

const LocalBusinessSchema = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  services = [],
  foundingDate,
  employees
}: LocalBusinessSchemaProps) => {
  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name,
    "description": description,
    "url": url,
    "logo": `${url}/og-image.png`,
    "image": `${url}/og-image.png`,
    "priceRange": "$$",
    "serviceType": "AI Consulting and Training"
  };

  if (telephone) structuredData.telephone = telephone;
  if (email) structuredData.email = email;
  if (foundingDate) structuredData.foundingDate = foundingDate;
  if (employees) structuredData.numberOfEmployees = employees;

  if (address) {
    structuredData.address = {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    };
  }

  if (geo) {
    structuredData.geo = {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    };
  }

  if (openingHours && openingHours.length > 0) {
    structuredData.openingHoursSpecification = openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      "opens": hours.opens,
      "closes": hours.closes
    }));
  }

  if (services.length > 0) {
    structuredData.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default LocalBusinessSchema;