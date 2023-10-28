import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/config/site-config";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Agrinovate",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Agrinovate", "", "", ""],
  creator: "Mahendra S H",

  authors: [
    {
      name: "Agrinovate Team",
      url: siteConfig.url,
    },
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-light.png",
        href: "/logo-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
  other: {
    "og:image": "https://agrinovate.vercel.app/og-dark.png",
    "og:title": siteConfig.name,
    "og:description": siteConfig.description,
    "og:url": siteConfig.url,
    "twitter:image": "https://agrinovate.vercel.app/og-dark.png",
    "twitter:card": "summary_large_image",
    "twitter:title": siteConfig.name,
    "twitter:description": siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="bg-background">{children}</main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
