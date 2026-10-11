import { site } from '../config/site'

// WhatsApp link with the pre-filled message from config/site.js
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.message)}`
