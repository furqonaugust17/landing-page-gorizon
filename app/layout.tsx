import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const url = "https://gorizon.web.id";
const title = "Gorizon — Konsultasi IT & Software Development Tepercaya";
const description = "Konsultan IT terpercaya untuk Software/Web Development dan IT Strategy. Mempermudah Bisnis Anda, dengan Cara yang Transparan.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Gorizon",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gorizon Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#0F1B3C",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gorizon",
    url: url,
    logo: `${url}/favicon.svg`,
    description: description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-800-0000-0000",
      contactType: "customer service",
      email: "hello@gorizon.web.id",
    },
    sameAs: [
      "https://linkedin.com/company/gorizon",
      "https://instagram.com/gorizon",
    ],
  };

  const schemaProfessionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gorizon IT Consulting",
    image: `${url}/og-image.jpg`,
    description: description,
    telephone: "+62-800-0000-0000",
    email: "hello@gorizon.web.id",
    url: url,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    areaServed: "ID",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software & Web Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Strategy & Consulting",
          },
        },
      ],
    },
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Gorizon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gorizon adalah konsultan IT yang fokus pada software/web development dan IT strategy consulting, dengan pendekatan yang transparan di setiap tahap kerja.",
        },
      },
      {
        "@type": "Question",
        name: "Layanan apa saja yang ditawarkan Gorizon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami menawarkan layanan Software & Web Development (pembuatan aplikasi, website custom) serta IT Strategy & Consulting (audit, rekomendasi teknologi, roadmap).",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses pengerjaan proyek?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Umumnya berkisar antara 2 minggu hingga beberapa bulan. Kami selalu memberikan timeline yang jelas di awal.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara memulai konsultasi dengan Gorizon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calon klien dapat menghubungi kami lewat WhatsApp atau Form Email yang tersedia di halaman ini untuk menjadwalkan sesi konsultasi awal secara gratis.",
        },
      },
      {
        "@type": "Question",
        name: "Apa perbedaan Gorizon dengan vendor IT lainnya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami berfokus pada transparansi total. Proses kerja, timeline, dan budget disampaikan secara jujur. Kami bertindak sebagai mitra konsultasi, bukan sekadar pelaksana tugas.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah Gorizon bisa menangani proyek skala enterprise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami bisa. Namun fokus utama kami saat ini adalah membantu UMKM hingga bisnis menengah dan startup tahap awal untuk memiliki pondasi digital yang kuat.",
        },
      },
      {
        "@type": "Question",
        name: "Teknologi apa saja yang digunakan Gorizon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami menggunakan stack teknologi modern dan reliable seperti React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, dan layanan Cloud (AWS/GCP/Vercel) sesuai dengan kebutuhan proyek.",
        },
      },
    ],
  };

  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="describedby" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfessionalService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      </head>
      <body>
        <noscript>
          <strong>
            Gorizon adalah konsultan IT di Indonesia yang fokus pada software/web
            development dan IT strategy consulting. Silakan aktifkan JavaScript
            untuk melihat situs kami.
          </strong>
        </noscript>
        {children}
      </body>
    </html>
  );
}
