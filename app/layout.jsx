import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { APP_NAME, APP_DESCRIPTION } from "@/constants/app";
import { getToken } from "@/utils/token";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }) {
  // const token = getToken();
  // if (token) {
  //   redirect("/dashboard");
  // } else {
  //   redirect("login");
  // }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}

          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
