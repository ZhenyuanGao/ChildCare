import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'antd/dist/reset.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Child Care",
  description: "Demo Website made for Church Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'inter.className'}>{children}</body>
    </html>
  );
}
