const OCCASIONS = [
  { name: "Weddings", copy: "Bridal lehengas and ceremony couture." },
  { name: "Festivities", copy: "Suits, kurta sets and festive lehengas." },
  { name: "Receptions", copy: "Draped gowns and Indo-Western silhouettes." },
  { name: "Special Occasions", copy: "Sarees and co-ord sets for every invite." },
];

export function Occasions() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Occasions</p>
          <h2 className="display-lg mt-6">
            One wardrobe.
            <br />
            Every celebration.
          </h2>
          <p className="body-copy mt-8 max-w-md">
            From bridal couture to contemporary occasion wear, find a look for
            every celebration.
          </p>
          <a href="#collections" className="link-cta mt-9 text-foreground">
            Explore Collections
            <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="reveal">
          {OCCASIONS.map((o, i) => (
            <li
              key={o.name}
              className={`grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 border-b border-border py-7 md:gap-10 ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <span className="text-[0.688rem] tracking-[0.18em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 md:flex md:items-baseline md:justify-between md:gap-8">
                <h3 className="font-display text-2xl font-light md:text-3xl">
                  {o.name}
                </h3>
                <p className="body-copy mt-1 text-sm md:mt-0 md:max-w-xs md:text-right">
                  {o.copy}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
