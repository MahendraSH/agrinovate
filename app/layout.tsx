import { ThemeProvider } from "@/components/providers/theme-provider";
import ToasterProvider from "@/components/providers/toaster-provider";
import { siteConfig } from "@/lib/config/site-config";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProviders from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Agrinovate",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Agrinovate",
    "Plant Disease Prediction",
    "Fertilizer Recommendation",
    "Crop Recommendation",
  ],
  creator: "Agrinovate Team",

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
  const queryClient = new QueryClient();
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
            <main className="bg-background">
              <QueryProviders>{children}</QueryProviders>
              <ToasterProvider />
            </main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
