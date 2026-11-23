import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TradeLink - University of Cebu Marketplace',
  description: 'Campus-focused peer-to-peer marketplace for University of Cebu students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F3F6FA] text-[#0B236E]">{children}</body>
    </html>
  );
}
