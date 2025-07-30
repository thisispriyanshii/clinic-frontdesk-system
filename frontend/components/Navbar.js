'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Appointments', href: '/appointments', icon: '📅' },
  { name: 'Doctors', href: '/doctors', icon: '🧑‍⚕️' },
  { name: 'Queue', href: '/queue', icon: '📝' },
  { name: 'Analytics', href: '/analytics', icon: '📈' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-zinc-900 text-white p-6 flex flex-col justify-between fixed">
      <div>
        <h1 className="text-2xl font-bold mb-8">🩺 Clinic System</h1>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-zinc-800 transition ${
                pathname === link.href ? 'bg-zinc-800' : ''
              }`}
            >
              <span>{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }}
        className="text-sm bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
