interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
  readingTime?: string;
}

const ArticleSchema = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  articleSection,
  keywords = [],
  wordCount,
  readingTime
}: ArticleSchemaProps) => {
  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIWIA",
      "url": "https://aiwia.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aiwia.app/og-image.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url || "https://aiwia.app"
    }
  };

  if (image) {
    structuredData.image = {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    };
  }

  if (articleSection) structuredData.articleSection = articleSection;
  if (keywords.length > 0) structuredData.keywords = keywords.join(", ");
  if (wordCount) structuredData.wordCount = wordCount;
  if (readingTime) structuredData.timeRequired = readingTime;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default ArticleSchema;