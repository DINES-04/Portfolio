import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400" ,"500" ,"600" ,"700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "DINES S | PORTFOLIO",
  description: "",
  icon:['../assets/public/favicon.ico'],
  apple:['../assets/public/apple-touch-icon.png'],
  shortcut:['../assets/public/apple-touch-icon.png'],
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
