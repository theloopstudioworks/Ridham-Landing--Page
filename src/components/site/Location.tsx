import storeImg from "@/assets/riddham img/12.png";
import { BRAND, TEL_URL } from "@/lib/brand";

export function Location() {
  return (
    <section
      id="visit"
      className="border-t border-border bg-secondary/45 py-24 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div className="media-zoom reveal aspect-[7/5] lg:order-2">
          <img
            src={storeImg}
            alt="Interior of the Ridham Couture store with couture Indian garments on a brass rail"
            width={1400}
            height={1000}
            loading="lazy"
          />
        </div>

        <div className="reveal lg:order-1">
          <p className="eyebrow">Visit</p>
          <h2 className="display-lg mt-6">Visit Ridham Couture</h2>
          <p className="body-copy mt-6 max-w-md">
            Experience the collection in person and find the look made for your
            moment.
          </p>

          <address className="mt-10 space-y-5 not-italic">
            <div>
              <p className="text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
                Store
              </p>
              <p className="mt-2 font-display text-2xl font-light">
                {BRAND.name}
              </p>
              <p className="body-copy mt-1 text-sm">
                {BRAND.addressLine1}, {BRAND.addressLine2}
                <br />
                {BRAND.city} {BRAND.postalCode}, {BRAND.region}, {BRAND.country}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
                  Phone
                </p>
                <a
                  href={TEL_URL}
                  className="mt-2 block text-base text-foreground underline-offset-4 hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
                  Hours
                </p>
                <p className="body-copy mt-2 text-sm">{BRAND.hours}</p>
              </div>
            </div>
          </address>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-solid"
            >
              Get Directions
            </a>
            <a href={TEL_URL} className="btn-base btn-outline">
              Call Ridham
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
