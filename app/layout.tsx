import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil's Portfolio",
  description: "A professional software developer for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/static/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="icon" href="/static/favicon.ico" />

        <link rel="icon" href="/static/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/static/favicon-16x16.png" sizes="16x16" />

        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />

        <link
          rel="icon"
          href="/static/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/static/android-chrome-512x512.png"
          sizes="512x512"
        />

        <meta
          name="description"
          content="Nikhil's Portfolio - A professional software developer portfolio."
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
