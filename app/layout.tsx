import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const font = Inter({ subsets: ["latin"] });

import ThemeProvider from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "Zapier Clone"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
