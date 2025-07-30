'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
  }, [router]);

  return (
    <div className="flex h-screen bg-zinc-950">
      <Navbar />
      <main className="flex-1 overflow-auto bg-zinc-950">
        {children}
      </main>
    </div>
  );
}
