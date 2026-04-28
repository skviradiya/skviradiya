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
      <head>
        <style>{`
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #020617; /* Dark slate background matching the black theme */
          }
          ::-webkit-scrollbar-thumb {
            background: #0891b2; /* Cyan theme color */
            border-radius: 5px;
            border: 2px solid #020617; /* Gives a border-padding look */
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #06b6d4; /* Brighter cyan on hover */
          }
          * {
            scrollbar-width: thin;
            scrollbar-color: #0891b2 #020617;
          }
        `}</style>
      </head>
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
