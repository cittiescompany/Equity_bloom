import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Provider from "@/app/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Equity Bloom',
  description: 'Equity - Investment made easy!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      </head>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
