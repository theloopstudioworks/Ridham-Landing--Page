import bridalImg from "@/assets/bridal-edit-banner.png";
import { WHATSAPP_URL } from "@/lib/brand";

export function BridalEdit() {
  return (
    <section id="bridal" className="relative">
      <div className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <img
          src={bridalImg}
          alt="Bride in a hand-embroidered Ridham Couture bridal lehenga in a sunlit hall"
          width={1600}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-14 md:px-10 lg:pb-20">
          <div className="reveal max-w-xl text-white">
            <p className="eyebrow text-white/75">Bridal Couture</p>
            <h2 className="display-lg mt-5">The Bridal Edit</h2>
            <p className="mt-5 max-w-md text-[0.975rem] leading-relaxed text-white/85">
              Couture created for the moments that become memories.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-light mt-8"
            >
              Explore Bridal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
