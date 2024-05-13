import { Poppins, Raleway } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "tgashwinkumar - Portfolio",
  description: "Personal Portfolio website of T G Ashwin Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
