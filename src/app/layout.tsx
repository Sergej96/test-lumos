import type { Metadata } from "next";
import "./globals.css";
import { MainLayouts } from "./_layouts";

export const metadata: Metadata = {
  title: "VPN | test LUMOS",
  description: "Access everything securely with VPN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayouts>{children}</MainLayouts>
      </body>
    </html>
  );
}
