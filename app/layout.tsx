import type { Metadata } from "next";
import "./globals.css";
import "@/style/tailwind/tailwind.theme.css"
import { pretendard } from "@/style/fonts/font";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Next Project test",
  description: "Next 기초"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(pretendard.variable, "font-sans", geist.variable)}>
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
