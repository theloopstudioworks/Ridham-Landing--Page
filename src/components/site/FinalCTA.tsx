import finalImg from "@/assets/final-cta.jpg";
import { BRAND, TEL_URL, WHATSAPP_URL } from "@/lib/brand";

export function FinalCTA() {
  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
      <img
        src={finalImg}
        alt="Woman in flowing embroidered Ridham Couture occasion wear walking towards the light"
        width={1920}
        height={1080}
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 flex items-center">
        <div className="reveal mx-auto w-full max-w-[1440px] px-5 text-center text-white md:px-10">
          <h2 className="display-lg mx-auto max-w-3xl">
            Your moment. Your story. Your Ridham.
          </h2>
          <p className="mt-6 text-[0.975rem] text-white/85">
            Find something that feels like you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-champagne"
            >
              WhatsApp Us
            </a>
            <a href={TEL_URL} className="btn-base btn-light">
              Call Ridham
            </a>
          </div>
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="link-cta mx-auto mt-9 text-white/85"
          >
            Visit Us
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
