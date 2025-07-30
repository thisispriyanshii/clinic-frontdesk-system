// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
