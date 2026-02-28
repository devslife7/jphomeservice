import type { MetadataRoute } from "next"
import { brand } from "@/lib/design-system"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JP Home Services",
    short_name: "JP Home",
    description: "JP Home Services",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: brand.hex,
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
