import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { QueryClientProvider } from "@/contexts/queryClientProvider";
import ErrorBoundary from "@/components/hoc/ErrorBoundry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pokemon Browser",
  description: "Discover and explore Pokemon with page contols or  infinite scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable}`}>
        <ErrorBoundary>
          <AppRouterCacheProvider>
            <QueryClientProvider>{children}</QueryClientProvider>
          </AppRouterCacheProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
