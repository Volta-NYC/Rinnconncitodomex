import type { Metadata, Viewport } from "next"
import { business } from "@/content/business"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  icons: { icon: "/favicon.svg" },
}

export const viewport: Viewport = { themeColor: "#f5ede0" }

/**
 * English root layout. The site has one root layout per locale (via route
 * groups) so that <html lang> is genuinely correct on every page — a single
 * shared root could only ever be right for one of the two languages.
 */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
