'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/queue', label: 'Queue Management', icon: '👥' },
    { href: '/appointments', label: 'Appointments', icon: '📅' },
    { href: '/doctors', label: 'Doctors', icon: '👨‍⚕️' },
    { href: '/analytics', label: 'Analytics', icon: '📈' },
  ];

  return (
    <nav className="w-64 bg-zinc-900 shadow-lg border-r border-zinc-800 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">🏥</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Clinic Front Desk</h1>
            <p className="text-xs text-zinc-400">Management System</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
            <span className="text-zinc-300 text-sm">👤</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Front Desk Staff</p>
            <p className="text-xs text-zinc-400">Administrator</p>
          </div>
        </div>
        
        {token && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <span>🚪</span>
            <span className="font-medium">Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
}
