import { Rajdhani } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const rajdhani = Rajdhani({ weight: ['500', '600'], subsets: ["latin"] });

export const metadata = {
  title: "Rounak's Portfolio",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
