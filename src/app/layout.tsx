import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Dryp.fi',
  description: 'Yield optimization layer for DeFi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#111111] text-white font-avenir'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
