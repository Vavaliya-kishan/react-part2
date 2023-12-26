import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Contact ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Contact Page me aapka swagat hai..</h1>
        {children}
      </body>
    </html>
  );
}
