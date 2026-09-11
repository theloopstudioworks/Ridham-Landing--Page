import { Instagram } from "lucide-react";
import look4 from "@/assets/look-4.jpg";
import look1 from "@/assets/look-1.jpg";
import coord from "@/assets/cat-coord.jpg";
import saree from "@/assets/cat-saree.jpg";
import occasion from "@/assets/cat-occasion.jpg";
import craft1 from "@/assets/craft-1.jpg";
import { BRAND } from "@/lib/brand";

const GRID = [
  { img: look4, alt: "Portrait in an embroidered saree with statement earrings" },
  { img: coord, alt: "Embroidered contemporary co-ord set" },
  { img: look1, alt: "Embroidered bridal blouse back detail" },
  { img: saree, alt: "Woven silk saree with contrast border" },
  { img: occasion, alt: "Festive occasion wear at an evening celebration" },
  { img: craft1, alt: "Gold zardozi hand embroidery detail" },
];

export function InstagramFeed() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36">
      <div className="reveal max-w-xl">
        <p className="eyebrow">Instagram</p>
        <h2 className="display-lg mt-6">The World of Ridham</h2>
        <p className="body-copy mt-6">
          Discover new looks, styling inspiration and moments from Ridham
          Couture.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6 lg:mt-16 lg:gap-4">
        {GRID.map((g, i) => (
          <a
            key={i}
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="media-zoom reveal aspect-square"
            aria-label={`View Ridham Couture on Instagram — ${g.alt}`}
          >
            <img src={g.img} alt={g.alt} loading="lazy" />
          </a>
        ))}
      </div>

      <div className="reveal mt-12 flex flex-wrap items-center gap-5">
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-base btn-outline"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.4} />
          Follow on Instagram
        </a>
        <span className="text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
          {BRAND.instagramHandle}
        </span>
      </div>
    </section>
  );
}
