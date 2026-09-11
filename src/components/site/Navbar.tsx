import { useEffect, useState } from "react";
import { Instagram, MapPin, Phone, Menu, X } from "lucide-react";
import { BRAND, TEL_URL, WHATSAPP_URL } from "@/lib/brand";

const LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Bridal", href: "#bridal" },
  { label: "Indo-Western", href: "#indo-western" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = scrolled || open ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "bg-background/88 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 md:px-10 lg:grid-cols-[1fr_auto_1fr] ${
          scrolled ? "py-3.5" : "py-5"
        } ${tone}`}
      >
        <a
          href="#top"
          className="min-w-0 lg:order-2 lg:justify-self-center"
          aria-label="Ridham Couture home"
        >
          <span className="block text-center font-display text-lg leading-none font-normal tracking-[0.16em] sm:text-xl">
            RIDHAM
          </span>
          <span className="mt-1 block text-center text-[0.55rem] tracking-[0.42em] opacity-80">
            COUTURE
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden lg:order-1 lg:flex lg:items-center lg:gap-8"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[0.688rem] font-medium tracking-[0.18em] uppercase opacity-85 transition-opacity duration-300 hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 justify-self-end lg:order-3 lg:flex">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ridham Couture on Instagram"
            className="opacity-85 transition-opacity hover:opacity-100"
          >
            <Instagram className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.4} />
          </a>
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Find the Ridham Couture store"
            className="opacity-85 transition-opacity hover:opacity-100"
          >
            <MapPin className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.4} />
          </a>
          <a
            href={TEL_URL}
            aria-label={`Call Ridham Couture on ${BRAND.phoneDisplay}`}
            className="opacity-85 transition-opacity hover:opacity-100"
          >
            <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.4} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={`btn-base px-5 py-2.5 ${scrolled ? "btn-solid" : "btn-light"}`}
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="shrink-0 justify-self-end p-1 lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.4} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          )}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pt-4 pb-8 lg:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 font-display text-2xl font-light text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
