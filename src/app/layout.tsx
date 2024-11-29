import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shravan Viradiya - React Native Developer",
  description:
    "Portfolio of Shravan Viradiya, a React Native Developer with 3+ years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
