'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1: Total Appointments */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold text-gray-700">Total Appointments</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">56</p>
        </div>

        {/* Card 2: Patients in Queue */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold text-gray-700">Patients in Queue</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
        </div>

        {/* Card 3: Doctors Available */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold text-gray-700">Doctors Available</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">4</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Appointment Overview</h2>
        <div className="text-gray-500">
          {/* Placeholder: replace with chart or table */}
          Charts or summary data will go here.
        </div>
      </div>
    </div>
  );
}
