import type { Metadata } from "next";
import "@/styles/globals.css";
import PrelineScriptWrapper from "@/components/PrelineUI/PrelineScriptWrapper";

export const metadata: Metadata = {
  title: "Home - TechXpress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <PrelineScriptWrapper />
    </html>
  );
}
