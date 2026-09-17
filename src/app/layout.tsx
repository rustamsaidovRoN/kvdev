import type { Metadata } from "next";
import { Cormorant, Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ClientBody from "./ClientBody";

const display = Cormorant({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kvdev.group"),
  title: {
    default: "KV DEV — De Luxe житлові простори у Києві та Конча-Заспі",
    template: "%s | KV DEV",
  },
  description:
    "KV DEV створює житлові простори класу De Luxe у Києві та Конча-Заспі. Архітектура, локація, матеріали та приватний сервіс, підпорядковані ідеї досконалості життя.",
  applicationName: "KV DEV",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "KV DEV — De Luxe житлові простори у Києві та Конча-Заспі",
    description:
      "Девелопер преміальної нерухомості: Тиха 19, VELETNI, KOZYN 7 CLUB та VO.",
    url: "https://www.kvdev.group",
    siteName: "KV DEV",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KV DEV — De Luxe житлові простори",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KV DEV — De Luxe житлові простори",
    description:
      "Житлові простори класу De Luxe у Києві та Конча-Заспі.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
