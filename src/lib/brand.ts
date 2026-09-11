export const BRAND = {
  name: "Ridham Couture",
  // TODO: replace the placeholder contact details below with the real ones.
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "919876543210",
  whatsappMessage:
    "Hello Ridham Couture, I'd like to know more about your collection.",
  instagramHandle: "@ridhamcouture_",
  instagramUrl: "https://www.instagram.com/ridhamcouture_/",
  addressLine1: "Ridham Couture, 12 Linking Road",
  addressLine2: "Bandra West",
  city: "Mumbai",
  region: "Maharashtra",
  postalCode: "400050",
  country: "India",
  hours: "Mon – Sun · 11:00 AM – 8:30 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ridham+Couture+Linking+Road+Bandra+West+Mumbai",
} as const;

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  BRAND.whatsappMessage,
)}`;
export const TEL_URL = `tel:${BRAND.phoneRaw}`;
export const FULL_ADDRESS = `${BRAND.addressLine1}, ${BRAND.addressLine2}, ${BRAND.city} ${BRAND.postalCode}`;
