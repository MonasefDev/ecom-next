import "@/app/_styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alicom",
  description: "e-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gray-100 relative min-h-screen text-[16px]`}
      >
        {children}
      </body>
    </html>
  );
}
