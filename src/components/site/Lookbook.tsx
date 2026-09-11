import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import { BRAND } from "@/lib/brand";

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="border-t border-border bg-muted/60 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Lookbook</p>
            <h2 className="display-lg mt-6">The Ridham Lookbook</h2>
          </div>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="link-cta text-foreground"
          >
            View Lookbook
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-12 lg:mt-20 lg:gap-8">
          <figure className="media-zoom reveal aspect-[3/4] md:col-span-5">
            <img
              src={look1}
              alt="Back detail of an embroidered bridal blouse and lehenga"
              width={1000}
              height={1300}
              loading="lazy"
            />
          </figure>
          <figure className="media-zoom reveal aspect-[3/4] md:col-span-4 md:mt-20">
            <img
              src={look3}
              alt="Model in a contemporary fusion co-ord set seated indoors"
              width={1000}
              height={1300}
              loading="lazy"
            />
          </figure>
          <figure className="media-zoom reveal aspect-[3/4] md:col-span-3 md:mt-40">
            <img
              src={look4}
              alt="Close portrait with statement earrings and an embroidered saree"
              width={1000}
              height={1300}
              loading="lazy"
            />
          </figure>
          <figure className="media-zoom reveal aspect-[16/10] md:col-span-9 md:col-start-3">
            <img
              src={look2}
              alt="Two models in coordinated festive Indian ensembles"
              width={1400}
              height={1000}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
