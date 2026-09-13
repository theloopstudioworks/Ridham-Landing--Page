import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/brand";

const heroImg =
  "https://res.cloudinary.com/doudcr0tg/image/upload/v1789295300/RC_23_1_w1s8w9.png";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.18}px, 0) scale(1.02)` }}
      >
        <img
          src={heroImg}
          alt="Model wearing a hand-embroidered contemporary Indian occasion-wear ensemble by Ridham Couture"
          width={5040}
          height={3360}
          fetchPriority="high"
          className="h-full w-full object-cover object-[42%_15%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-24 md:px-10 lg:justify-center lg:pb-0">
        <div className="max-w-2xl text-white">
          <p className="rc-rise eyebrow text-white/75" style={{ animationDelay: "120ms" }}>
            Ridham Couture
          </p>
          <h1 className="rc-rise display-xl mt-5" style={{ animationDelay: "260ms" }}>
            Indian couture,
            <br />
            reimagined.
          </h1>
          <p className="rc-rise mt-7 max-w-xl text-[0.975rem] leading-relaxed text-white/85" style={{ animationDelay: "420ms" }}>
            Bridal couture, timeless Indian silhouettes and contemporary
            Indo-Western styles created for weddings, festivities and moments
            worth remembering.
          </p>
          <div className="rc-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "560ms" }}>
            <a href="#collections" className="btn-base btn-champagne">
              Explore Collections
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-light"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to brand introduction"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/70 lg:flex"
      >
        <span className="text-[0.563rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block h-10 w-px bg-white/45" />
      </a>
    </section>
  );
}
