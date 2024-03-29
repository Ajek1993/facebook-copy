import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ChatProvider from "@/providers/ChatProvider";
import FirebaseProvider from "@/providers/FirebaseProvider";
import UserProvider from "@/providers/UserProvider";
import NextProvider from "@/providers/NextUIProvider";

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className}`}>
        <NextProvider>
          <UserProvider>
            <FirebaseProvider>
              <ChatProvider>{children}</ChatProvider>
            </FirebaseProvider>
          </UserProvider>
        </NextProvider>
      </body>
    </html>
  );
}
