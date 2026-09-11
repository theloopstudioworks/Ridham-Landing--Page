import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Hero } from "@/components/site/Hero";
import { BrandIntro } from "@/components/site/BrandIntro";
import { Collections } from "@/components/site/Collections";
import { BridalEdit } from "@/components/site/BridalEdit";
import { ContemporaryEdit } from "@/components/site/ContemporaryEdit";
import { Craftsmanship } from "@/components/site/Craftsmanship";
import { Occasions } from "@/components/site/Occasions";
import { Lookbook } from "@/components/site/Lookbook";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Location } from "@/components/site/Location";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { BRAND, FULL_ADDRESS } from "@/lib/brand";

const TITLE = "Ridham Couture — Bridal & Indo-Western Indian Couture";
const DESCRIPTION =
  "Ridham Couture designs bridal lehengas, sarees, suits, co-ord sets and Indo-Western occasion wear — Indian couture reimagined for weddings, festivities and celebrations.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: BRAND.name,
          description: DESCRIPTION,
          telephone: BRAND.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${BRAND.addressLine1}, ${BRAND.addressLine2}`,
            addressLocality: BRAND.city,
            addressRegion: BRAND.region,
            postalCode: BRAND.postalCode,
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 11:00-20:30",
          sameAs: [BRAND.instagramUrl],
          hasMap: BRAND.mapsUrl,
          areaServed: BRAND.city,
          knowsAbout: [
            "Bridal Lehengas",
            "Designer Lehengas",
            "Sarees",
            "Suits",
            "Indo-Western Clothing",
            "Co-Ord Sets",
            "Ethnic Wear",
            "Wedding Wear",
            "Festive Wear",
            "Occasion Wear",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">
          Indian Couture, Bridal &amp; Contemporary Ethnic Wear — Ridham Couture
          in {BRAND.city}. {FULL_ADDRESS}.
        </h1>
        <Hero />
        <BrandIntro />
        <Collections />
        <BridalEdit />
        <ContemporaryEdit />
        <Craftsmanship />
        <Occasions />
        <Lookbook />
        <InstagramFeed />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
