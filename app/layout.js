import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400" ,"500" ,"600" ,"700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "DINES S | Portfolio",
  description: "A portfolio website showcasing my work and skills.",
  icon:['../public/favicon.ico'],
  apple:['../public/apple-touch-icon.png'],
  shortcut:['../public/apple-touch-icon.png'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-themes dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
