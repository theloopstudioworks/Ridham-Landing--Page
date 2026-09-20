import { useState } from "react";
import look4 from "@/assets/riddham img/10.png";
import look1 from "@/assets/riddham img/7.png";
import coord from "@/assets/riddham img/5.png";
import saree from "@/assets/riddham img/9.png";

const TESTIMONIALS = [
  {
    name: "Priya & Arjun",
    event: "Wedding couture",
    img: look4,
    alt: "Bride in floral embroidery bridal couture",
    quote:
      "The finishing was impeccable and every detail felt deeply personal.",
  },
  {
    name: "Rhea Sharma",
    event: "Festive edit",
    img: coord,
    alt: "Client in a contemporary embroidered co-ord set",
    quote:
      "Elegant, statement-making, and effortless — exactly the mood I wanted.",
  },
  {
    name: "Meher Kapoor",
    event: "Reception moment",
    img: look1,
    alt: "Detailed bridal veil and blouse design",
    quote:
      "It looked stunning in person and even more beautiful in our photographs.",
  },
  {
    name: "Aisha Malhotra",
    event: "Saree styling",
    img: saree,
    alt: "Client in a woven silk saree with layered drape",
    quote:
      "The styling, fitting, and final look felt luxurious, flattering, and completely mine.",
  },
];

export function InstagramFeed() {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);
  const activeTestimonial = testimonials[0];
  const stackedTestimonials = testimonials.slice(1);

  const handleTestimonialClick = (index: number) => {
    setTestimonials((previousTestimonials) => {
      const selectedIndex = index + 1;

      return [
        ...previousTestimonials.slice(selectedIndex),
        ...previousTestimonials.slice(0, selectedIndex),
      ];
    });
  };

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-36">
      <div className="reveal max-w-xl">
        <p className="eyebrow">Customer testimonials</p>
        <h2 className="display-lg mt-6">Loved by our clients</h2>
        <p className="body-copy mt-6">
          From bridal couture to festive statement pieces, our clients trust
          Ridham Couture for elevated design, thoughtful styling, and a truly
          personal experience.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <article
          key={activeTestimonial.name}
          className="reveal overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 shadow-[0_30px_90px_rgba(20,20,20,0.06)] transition-all duration-500 ease-out animate-[fadeInUp_450ms_ease-out]"
        >
          <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={activeTestimonial.img}
                alt={activeTestimonial.alt}
                className="h-full w-full object-cover transition-all duration-500 ease-out hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-12 bg-gradient-to-r from-[#d9b777] via-[#f0d8a4] to-transparent" />
                  <p className="text-[0.625rem] tracking-[0.26em] text-[#8b7a52] uppercase">
                    {activeTestimonial.event}
                  </p>
                </div>
                <p className="text-3xl font-medium italic leading-[1.12] text-foreground md:text-[2.1rem] lg:text-[2.4rem]">
                  “{activeTestimonial.quote}”
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-border/70 pt-5">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-[#d9b777]/40 bg-muted shadow-[0_8px_20px_rgba(217,183,119,0.12)]">
                  <img
                    src={activeTestimonial.img}
                    alt={`${activeTestimonial.name} portrait`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold tracking-[0.02em] text-foreground">
                    {activeTestimonial.name}
                  </p>
                  <p className="text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Client review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="space-y-5">
          {stackedTestimonials.map((testimonial, index) => {
            const isSelected = testimonial === testimonials[0];

            return (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => handleTestimonialClick(index)}
                className={`reveal w-full cursor-pointer overflow-hidden rounded-[1.75rem] border p-5 text-left shadow-[0_20px_60px_rgba(20,20,20,0.04)] transition-all duration-300 ease-out ${
                  isSelected
                    ? "scale-[1.01] border-[#d9b777]/50 bg-[#f9f5ef] shadow-[0_28px_80px_rgba(20,20,20,0.10)]"
                    : "border-border/70 bg-card/70 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-[0_24px_70px_rgba(20,20,20,0.08)]"
                } ${index > 0 ? "translate-y-[-2px]" : ""}`}
                aria-pressed={isSelected}
                style={{
                  marginTop: index === 0 ? 0 : "-0.1rem",
                  transform: isSelected ? "translateY(-1px) scale(1.01)" : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full border border-border/80 bg-muted">
                    <img
                      src={testimonial.img}
                      alt={`${testimonial.name} portrait`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-[0.625rem] tracking-[0.18em] text-muted-foreground uppercase">
                      {testimonial.event}
                    </p>
                  </div>
                </div>

                <p className="mt-4 body-copy text-base leading-relaxed text-foreground/85">
                  “{testimonial.quote}”
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
