import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { BRAND, TEL_URL, WHATSAPP_URL } from "@/lib/brand";

const ACTIONS = [
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    Icon: MessageCircle,
    primary: true,
    aria: "Message Ridham Couture on WhatsApp",
  },
  {
    label: "Call",
    href: TEL_URL,
    Icon: Phone,
    primary: false,
    aria: `Call Ridham Couture on ${BRAND.phoneDisplay}`,
  },
  {
    label: "Location",
    href: BRAND.mapsUrl,
    Icon: MapPin,
    primary: false,
    aria: "Get directions to the Ridham Couture store",
  },
  {
    label: "Instagram",
    href: BRAND.instagramUrl,
    Icon: Instagram,
    primary: false,
    aria: "Follow Ridham Couture on Instagram",
  },
];

export function FloatingCTA() {
  return (
    <>
      {/* Desktop rail */}
      <div className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 lg:flex">
        {[...ACTIONS].reverse().map(({ label, href, Icon, primary, aria }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("tel:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={aria}
            className={`group flex h-11 items-center justify-end overflow-hidden rounded-full border pr-[0.85rem] pl-[0.85rem] shadow-[0_6px_24px_-14px_rgba(60,45,25,0.45)] transition-[width,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              primary
                ? "border-transparent bg-accent text-foreground"
                : "border-border bg-secondary text-foreground hover:bg-accent"
            } w-11 hover:w-[9.75rem]`}
          >
            <span className="mr-auto max-w-0 overflow-hidden pl-0 text-[0.688rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[7rem] group-hover:pr-3 group-hover:opacity-100">
              {label}
            </span>
            <Icon className="h-[1.1rem] w-[1.1rem] shrink-0" strokeWidth={1.4} />
          </a>
        ))}
      </div>

      {/* Mobile bar */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 gap-px border-t border-border bg-border lg:hidden"
      >
        {ACTIONS.map(({ label, href, Icon, primary, aria }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("tel:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={aria}
            className={`flex min-h-[3.75rem] flex-col items-center justify-center gap-1.5 ${
              primary ? "bg-accent text-foreground" : "bg-secondary text-foreground"
            }`}
          >
            <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.4} />
            <span className="text-[0.563rem] font-medium tracking-[0.16em] uppercase">
              {label}
            </span>
          </a>
        ))}
      </nav>
      {/* spacer so the bar never covers content */}
      <div aria-hidden className="h-[3.75rem] lg:hidden" />
    </>
  );
}
