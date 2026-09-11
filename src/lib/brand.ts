export const BRAND = {
  name: "Ridham Couture",
  // TODO: replace the placeholder contact details below with the real ones.
  phoneDisplay: "+91 9045454256",
  phoneRaw: "+919045454256",
  whatsapp: "919045454256",
  whatsappMessage:
    "Hello Ridham Couture, I'd like to know more about your collection.",
  instagramHandle: "@ridhamcouture_",
  instagramUrl: "https://www.instagram.com/ridhamcouture_/",
  addressLine1: "41-42, Rajpur Rd, opposite Universal Petrol pump",
  addressLine2: "Patel Market, Chukkuwala",
  city: "Dehradun",
  region: "Uttarakhand",
  postalCode: "248001",
  country: "India",
  hours: "Every day · 11:00 AM – 9:00 PM",
  mapsUrl: "https://maps.app.goo.gl/2pvbzWtF87QGPb1dA",
} as const;

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  BRAND.whatsappMessage,
)}`;
export const TEL_URL = `tel:${BRAND.phoneRaw}`;
export const FULL_ADDRESS = `${BRAND.addressLine1}, ${BRAND.addressLine2}, ${BRAND.city} ${BRAND.postalCode}`;
