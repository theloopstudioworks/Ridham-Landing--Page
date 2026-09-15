import look1 from "@/assets/riddham img/14.png";
import look2 from "@/assets/riddham img/15.png";
import look3 from "@/assets/riddham img/16.png";
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
              alt="Ridham Couture lookbook image"
              width={1000}
              height={1300}
              loading="lazy"
            />
          </figure>
          <figure className="media-zoom reveal aspect-[3/4] md:col-span-4 md:mt-20">
            <img
              src={look2}
              alt="Ridham Couture lookbook image"
              width={1000}
              height={1300}
              loading="lazy"
            />
          </figure>
          <figure className="media-zoom reveal aspect-[3/4] md:col-span-3 md:mt-40">
            <img
              src={look3}
              alt="Ridham Couture lookbook image"
              width={1000}
              height={1300}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
