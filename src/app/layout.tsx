import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BitNBolt - Modern Websites for Small Business",
  description: "Launch a fast, modern website that converts. Built for SMBs who want control without complexity.",
  keywords: "small business website, SMB web design, business website builder, fast website platform",
  authors: [{ name: "BitNBolt" }],
  creator: "BitNBolt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitnbolt.com",
    title: "BitNBolt - Modern Websites for Small Business",
    description: "Launch a fast, modern website that converts. Built for SMBs who want control without complexity.",
    siteName: "BitNBolt",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitNBolt - Modern Websites for Small Business",
    description: "Launch a fast, modern website that converts. Built for SMBs who want control without complexity.",
    creator: "@bitnbolt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}