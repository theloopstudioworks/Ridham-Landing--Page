import bridal from "@/assets/cat-bridal.jpg";
import lehenga from "@/assets/cat-lehenga.jpg";
import saree from "@/assets/cat-saree.jpg";
import suits from "@/assets/cat-suits.jpg";
import indo from "@/assets/cat-indowestern.jpg";
import coord from "@/assets/cat-coord.jpg";
import occasion from "@/assets/cat-occasion.jpg";
import { WHATSAPP_URL } from "@/lib/brand";

type Item = {
  name: string;
  copy: string;
  cta: string;
  img: string;
  alt: string;
  href: string;
};

const FEATURED: Item[] = [
  {
    name: "Bridal",
    copy: "Hand-embroidered bridal lehengas built over months, made for the day everything changes.",
    cta: "Explore Bridal",
    img: bridal,
    alt: "Bride in a gold hand-embroidered bridal lehenga by Ridham Couture",
    href: "#bridal",
  },
  {
    name: "Indo-Western",
    copy: "Embroidered capes, jackets and draped separates cut on contemporary lines.",
    cta: "Explore Indo-Western",
    img: indo,
    alt: "Model in an embroidered Indo-Western jacket with tailored trousers",
    href: "#indo-western",
  },
];

const REST: Item[] = [
  {
    name: "Lehengas",
    copy: "Festive and reception lehengas in lighter, easier silhouettes.",
    cta: "Explore Lehengas",
    img: lehenga,
    alt: "Model in a cream and gold designer lehenga in motion",
    href: WHATSAPP_URL,
  },
  {
    name: "Sarees",
    copy: "Silk, organza and pre-draped sarees with modern blouse work.",
    cta: "Explore Sarees",
    img: saree,
    alt: "Model draped in a woven silk saree with a contrast border",
    href: WHATSAPP_URL,
  },
  {
    name: "Suits",
    copy: "Anarkalis, kurta sets and sharara suits for every function.",
    cta: "Explore Suits",
    img: suits,
    alt: "Model in an embroidered anarkali suit set with dupatta",
    href: WHATSAPP_URL,
  },
  {
    name: "Co-Ord Sets",
    copy: "Relaxed embroidered separates that carry from day to evening.",
    cta: "Explore Co-Ords",
    img: coord,
    alt: "Model in an embroidered contemporary co-ord set",
    href: WHATSAPP_URL,
  },
  {
    name: "Occasion Wear",
    copy: "Festive and ethnic wear for the celebrations in between.",
    cta: "Explore Occasion Wear",
    img: occasion,
    alt: "Woman in festive occasion wear at an evening celebration",
    href: WHATSAPP_URL,
  },
];

function Cta({ item }: { item: Item }) {
  const external = item.href.startsWith("http");
  return (
    <a
      href={item.href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="link-cta mt-4 text-foreground"
    >
      {item.cta}
      <span aria-hidden>→</span>
    </a>
  );
}

export function Collections() {
  return (
    <section
      id="collections"
      className="border-t border-border bg-muted/60 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Categories</p>
          <h2 className="display-lg mt-6">The Collection</h2>
          <p className="body-copy mt-6 max-w-xl">
            Traditional Indian couture and contemporary fusion wear, made to
            order and finished in house.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14">
          {FEATURED.map((item) => (
            <article key={item.name} className="reveal">
              <div className="media-zoom aspect-[4/5]">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1024}
                  height={1400}
                  loading="lazy"
                />
              </div>
              <h3 className="display-md mt-7">{item.name}</h3>
              <p className="body-copy mt-3 max-w-md">{item.copy}</p>
              <Cta item={item} />
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-14">
          {REST.map((item) => (
            <article key={item.name} className="reveal">
              <div className="media-zoom aspect-[3/4]">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1024}
                  height={1400}
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-light">{item.name}</h3>
              <p className="body-copy mt-2 text-sm">{item.copy}</p>
              <Cta item={item} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
