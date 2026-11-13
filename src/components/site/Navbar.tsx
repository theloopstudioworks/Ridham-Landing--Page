import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BRAND, TEL_URL } from "@/lib/brand";

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

        <nav aria-label="Primary" className="hidden lg:order-1 lg:flex lg:items-center lg:gap-8">
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

        <div className="hidden items-center gap-6 justify-self-end lg:order-3 lg:flex">
          <a
            href={TEL_URL}
            aria-label={`Call Ridham Couture at ${BRAND.phoneDisplay}`}
            className="flex items-center gap-2 text-[0.688rem] font-medium tracking-[0.18em] opacity-85 transition-opacity duration-300 hover:opacity-100"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            {BRAND.phoneDisplay}
          </a>
          <a
            href="#collections"
            className={`btn-base px-5 py-2.5 ${scrolled ? "btn-solid" : "btn-light"}`}
          >
            Shop Now
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-4 justify-self-end lg:hidden">
          <a
            href={TEL_URL}
            aria-label={`Call Ridham Couture at ${BRAND.phoneDisplay}`}
            className="p-1"
          >
            <Phone className="h-5 w-5" strokeWidth={1.4} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-1"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.4} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            )}
          </button>
        </div>
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
          <a
            href={TEL_URL}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border-b border-border/60 py-4 text-base text-foreground"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            {BRAND.phoneDisplay}
          </a>
          <a
            href="#collections"
            onClick={() => setOpen(false)}
            className="mt-4 block border border-border bg-foreground px-5 py-3 text-center text-xs font-medium tracking-[0.18em] text-background uppercase"
          >
            Shop Now
          </a>
        </nav>
      )}
    </header>
  );
}
