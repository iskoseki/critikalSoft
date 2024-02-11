import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import Providers from "./providers";
import Cursor from "@/components/Greeting/MouseCustom";
const inter = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Critikal Software",
  description: "Bespoken Web development",
};
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-200  dark:bg-gray-800`}>
        <Providers>
          <Container>
            {/*Cursor
             <Cursor/>
             */}

            <Navbar navLinks={navLinks} />
            {children}
            <Footer navLinks={navLinks} />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
