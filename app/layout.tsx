import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jersyla Veida Lima Tavares | Full-stack Java Developer",
  description:
    "Portfolio of Jersyla Veida Lima Tavares, a Full-stack Java Developer focused on Java, Spring Boot, REST APIs, and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
