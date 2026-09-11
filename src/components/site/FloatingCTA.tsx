import { Instagram, MapPin, Phone } from "lucide-react";
import { BRAND, TEL_URL, WHATSAPP_URL } from "@/lib/brand";

function WhatsAppIcon({
  className,
  strokeWidth = 1.8,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8.75" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M8.8 8.9c.2-.35.4-.37.65-.37h.35c.13 0 .28.05.35.25l.5 1.22c.08.2.05.35-.08.5l-.38.48c-.12.14-.1.3-.03.43.18.34.48.8.98 1.28.52.5.96.77 1.3.94.14.07.3.08.42-.05l.48-.53c.13-.15.3-.18.5-.1l1.17.55c.2.1.25.23.22.43-.04.27-.18.8-.55 1.03-.3.2-.72.28-1.13.18-.45-.1-1.5-.52-2.6-1.52-.9-.8-1.5-1.75-1.68-2.08-.18-.32-.48-1-.48-1.6 0-.6.3-.9.43-1.01Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m7.15 17.2-.55 2.05 2.1-.52"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ACTIONS = [
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    Icon: WhatsAppIcon,
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
                ? "border-transparent bg-[#25D366] text-white hover:bg-[#1ebe5d]"
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
              primary ? "bg-[#25D366] text-white" : "bg-secondary text-foreground"
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
