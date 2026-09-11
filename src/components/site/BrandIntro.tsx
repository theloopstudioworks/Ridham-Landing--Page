import introImg from "@/assets/intro.jpg";

export function BrandIntro() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="reveal">
          <p className="eyebrow">The Ridham World</p>
          <h2 className="display-lg mt-6">
            Tradition,
            <br />
            tailored for today.
          </h2>
          <p className="body-copy mt-8 max-w-lg">
            Ridham Couture began with a simple belief — that Indian clothing
            should feel as modern as the woman wearing it. Every lehenga, saree
            and suit is built on traditional craft, then cut with a
            contemporary eye for proportion, drape and ease.
          </p>
          <p className="body-copy mt-5 max-w-lg">
            From bridal couture to Indo-Western co-ord sets, the collection
            moves easily between ceremony and celebration.
          </p>
          <a href="#collections" className="link-cta mt-10 text-foreground">
            Discover Ridham
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="media-zoom reveal aspect-[4/5] lg:aspect-[4/5]">
          <img
            src={introImg}
            alt="Woman seated wearing an ivory hand-embroidered Ridham Couture ethnic ensemble"
            width={1024}
            height={1400}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
