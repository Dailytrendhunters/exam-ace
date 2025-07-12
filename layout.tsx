import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Flowing State - Elevate Your Learning',
  description: 'Flowing State is the all-in-one platform that adapts to your learning style. Interactive courses, expert instructors, and a vibrant community await you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans text-gray-300 antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
