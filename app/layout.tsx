import Footer from "@/components/Footer";
import GoogleTransalteWidget from "@/components/GoogleTranslate";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Medical Imaging Services in Roxburgh Park | In One Imaging",
    template: "%s | In One Imaging",
  },
  description:
    "In One Imaging specialises in providing high quality medical imaging, scanning and ultrasounds. Book an appointment with us today.",
  metadataBase: new URL("https://inoneimaging.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Medical Imaging Services in Roxburgh Park | In One Imaging",
    description:
      "In One Imaging specialises in providing high quality medical imaging, scanning and ultrasounds. Book an appointment with us today.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <GoogleTransalteWidget />
      </body>
    </html>
  );
}
