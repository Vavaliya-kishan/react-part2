// import { Inter } from "next/font/google";
import  MyContext  from "@/Helper/Context";
import "./globals.css";

export const metadata = {
  title: "Kishan React",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MyContext>{children}</MyContext>
        </body>
    </html>
  );
}
