import contemporary from "@/assets/contemporary.jpg";
import coord from "@/assets/cat-coord.jpg";
import { WHATSAPP_URL } from "@/lib/brand";

export function ContemporaryEdit() {
  return (
    <section
      id="indo-western"
      className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <div className="media-zoom reveal aspect-[4/5]">
            <img
              src={contemporary}
              alt="Model in an embroidered jacket and draped skirt, a contemporary Indo-Western look"
              width={1200}
              height={1500}
              loading="lazy"
            />
          </div>
          <div className="media-zoom reveal mt-10 aspect-[4/5]">
            <img
              src={coord}
              alt="Model in an embroidered co-ord set with relaxed contemporary styling"
              width={1024}
              height={1400}
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="eyebrow">Indo-Western</p>
          <h2 className="display-lg mt-6">
            Tradition,
            <br />
            with a twist.
          </h2>
          <p className="body-copy mt-8 max-w-lg">
            Indian craftsmanship meets contemporary silhouettes for a modern
            expression of occasion wear.
          </p>
          <ul className="mt-9 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 text-[0.688rem] tracking-[0.16em] text-muted-foreground uppercase">
            <li className="border-t border-border pt-3">Fusion silhouettes</li>
            <li className="border-t border-border pt-3">Co-ord sets</li>
            <li className="border-t border-border pt-3">Draped separates</li>
            <li className="border-t border-border pt-3">Embroidered capes</li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-base btn-outline mt-10"
          >
            Explore Indo-Western
          </a>
        </div>
      </div>
    </section>
  );
}
