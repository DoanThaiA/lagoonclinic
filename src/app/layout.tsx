import type { Metadata, Viewport } from "next";
import { Barlow, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/data/site";

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | ${site.tagline}`,
    template: `%s | Lagoon Clinic`,
  },
  description: site.description,
  keywords: [
    "phòng khám da liễu Hà Nội",
    "Ultherapy Prime",
    "Thermage FLX",
    "AviClear trị mụn",
    "trị nám Hollywood Spectra",
    "nâng cơ không phẫu thuật",
    "Lagoon Clinic",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    title: `${site.legalName}`,
    description: site.description,
    images: [{ url: "/images/tech-face.webp", width: 1024, height: 1024 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F47920",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.legalName,
  url: site.url,
  telephone: "+84829962269",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "480 Xã Đàn",
    addressLocality: "Hà Nội",
    addressCountry: "VN",
  },
  image: `${site.url}/images/facade.webp`,
  slogan: site.slogan,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${lora.variable} ${barlow.variable}`}>
      <body className="min-h-dvh pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Bỏ qua tới nội dung
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
