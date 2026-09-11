import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";
import craft3 from "@/assets/craft-3.jpg";

const ITEMS = [
  {
    img: craft1,
    alt: "Close-up of gold zardozi hand embroidery with pearls on ivory silk",
    caption: "Zardozi & hand embroidery",
  },
  {
    img: craft2,
    alt: "Artisan hands stitching embroidery onto fabric with a needle",
    caption: "Made by hand, in house",
  },
  {
    img: craft3,
    alt: "Detail of scalloped embroidered edging on layered champagne silk",
    caption: "Finishing and detail",
  },
];

export function Craftsmanship() {
  return (
    <section className="border-y border-border bg-secondary/45 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Craft</p>
          <h2 className="display-lg mt-6">Crafted in every detail.</h2>
          <p className="body-copy mt-6 max-w-lg">
            Zardozi, resham and sequin work applied by hand, on fabrics chosen
            for how they fall — not just how they photograph.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {ITEMS.map((item) => (
            <figure key={item.caption} className="reveal">
              <div className="media-zoom aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
