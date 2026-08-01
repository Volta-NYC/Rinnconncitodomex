import type { Metadata } from "next"
import "@fontsource-variable/manrope"
import "@fontsource/dm-serif-display"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rinconcitodomex.com"),
  title: {
    default: "Rinconcito Domex | Dominican & Mexican Catering in Brooklyn",
    template: "%s | Rinconcito Domex",
  },
  description:
    "MWBE-certified Dominican and Mexican catering for schools, government agencies, corporate events, and celebrations across New York.",
  applicationName: "Rinconcito Domex",
  keywords: [
    "Brooklyn catering",
    "Dominican catering NYC",
    "Mexican catering NYC",
    "MWBE catering New York",
    "corporate catering Brooklyn",
    "school catering NYC",
  ],
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Rinconcito Domex",
    title: "Rinconcito Domex | Two Cultures. One Table.",
    description:
      "Dominican and Mexican catering, rooted in Brooklyn and ready for New York.",
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rinconcito Domex — Two cultures. One table.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rinconcito Domex | Two Cultures. One Table.",
    description:
      "Dominican and Mexican catering, rooted in Brooklyn and ready for New York.",
    images: ["/og.jpg"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Rinconcito Domex",
  url: "https://rinconcitodomex.com",
  telephone: "+1-347-365-2786",
  description:
    "Dominican and Mexican food and catering for events in New York.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "505 Dekalb Avenue",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "New York",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
