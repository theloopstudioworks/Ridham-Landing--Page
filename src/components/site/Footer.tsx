import { BRAND, TEL_URL, WHATSAPP_URL } from "@/lib/brand";

const NAV = [
  { label: "Collections", href: "#collections" },
  { label: "Bridal", href: "#bridal" },
  { label: "Sarees", href: "#collections" },
  { label: "Suits", href: "#collections" },
  { label: "Indo-Western", href: "#indo-western" },
  { label: "Co-Ord Sets", href: "#collections" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "About", href: "#about" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-normal tracking-[0.16em]">
              RIDHAM
            </p>
            <p className="mt-1 text-[0.563rem] tracking-[0.42em] text-muted-foreground">
              COUTURE
            </p>
            <p className="body-copy mt-6 max-w-xs text-sm">
              Bridal lehengas, sarees, suits and Indo-Western occasion wear —
              Indian fashion, thoughtfully reimagined.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
              Explore
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-y-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.688rem] tracking-[0.18em] text-muted-foreground uppercase">
              Contact
            </p>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <p className="text-muted-foreground">
                {BRAND.addressLine1}, {BRAND.addressLine2}
                <br />
                {BRAND.city} {BRAND.postalCode}, {BRAND.region}
              </p>
              <p>
                <a href={TEL_URL} className="underline-offset-4 hover:underline">
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p className="text-muted-foreground">{BRAND.hours}</p>
            </address>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.688rem] tracking-[0.18em] uppercase">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                WhatsApp
              </a>
              <a href={TEL_URL} className="underline-offset-4 hover:underline">
                Call
              </a>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Location
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-6 text-[0.688rem] tracking-[0.14em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Ridham Couture
        </p>
      </div>
    </footer>
  );
}
