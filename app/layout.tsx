import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
const font = DM_Sans({ subsets: ["latin"] });

import ThemeProvider from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import ClerkProvider from "@/providers/clerk-provider";

export const metadata: Metadata = {
  title: "Zapier Clone"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>
          <ThemeProvider>
            {children}
            <ToastProvider />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

export default Layout;
