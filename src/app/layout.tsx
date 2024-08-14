import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import 'antd/dist/reset.css'
import ComponentLayout from "@/Components/ComponentLayout";
const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
  title: "Child Care",
  description: "Demo Website made for Church Community",
};
*/
export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">
      <body className={'inter.className'}>
      <AntdRegistry>
        <ComponentLayout>
          {children}
        </ComponentLayout>
        </AntdRegistry>
        </body>
    </html>
  );
}
//export default dynamic(()=> Promise.resolve(RootLayout),{ssr:false})