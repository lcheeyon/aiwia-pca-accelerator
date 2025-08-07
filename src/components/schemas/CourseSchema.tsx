interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  courseCode?: string;
  duration?: string;
  price?: string;
  currency?: string;
  url?: string;
  image?: string;
  skillLevel?: "Beginner" | "Intermediate" | "Advanced";
  inLanguage?: string;
  teaches?: string[];
}

const CourseSchema = ({
  name,
  description,
  provider,
  courseCode,
  duration,
  price,
  currency = "USD",
  url,
  image,
  skillLevel,
  inLanguage = "en",
  teaches = []
}: CourseSchemaProps) => {
  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://aiwia.app"
    },
    "inLanguage": inLanguage
  };

  if (courseCode) structuredData.courseCode = courseCode;
  if (duration) structuredData.timeRequired = duration;
  if (url) structuredData.url = url;
  if (image) structuredData.image = image;
  if (skillLevel) structuredData.educationalLevel = skillLevel;
  
  if (price) {
    structuredData.offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock"
    };
  }

  if (teaches.length > 0) {
    structuredData.teaches = teaches;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default CourseSchema;