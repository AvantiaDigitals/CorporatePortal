import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  authors: {
    name: siteConfig.author,
    url: new URL(siteConfig.url).href,
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: siteConfig.title,
    siteName: siteConfig.name,
    description: siteConfig.description,
    url: new URL(siteConfig.url).href,
    images: "/Meta.png",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar>{children}</Navbar>
        </Providers>
      </body>
    </html>
  );
}
