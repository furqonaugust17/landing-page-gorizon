import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export function SEO({
  title = "Gorizon — Konsultasi IT & Software Development Tepercaya",
  description = "Konsultan IT terpercaya untuk Software/Web Development dan IT Strategy. Mempermudah Bisnis Anda, dengan Cara yang Transparan.",
  url = "https://gorizon.com" // Placeholder URL
}: SEOProps) {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gorizon",
    "url": url,
    "logo": `${url}/logo.png`,
    "description": description,
  };

  const schemaProfessionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gorizon IT Consulting",
    "image": `${url}/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrganization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaProfessionalService)}
      </script>
    </Helmet>
  );
}
