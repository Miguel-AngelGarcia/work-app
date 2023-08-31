import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app">
        <div className="app-layers">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
