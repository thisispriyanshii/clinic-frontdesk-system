'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', appointments: 10 },
  { name: 'Tue', appointments: 20 },
  { name: 'Wed', appointments: 15 },
  { name: 'Thu', appointments: 30 },
  { name: 'Fri', appointments: 25 },
  { name: 'Sat', appointments: 18 },
  { name: 'Sun', appointments: 8 },
];

export default function AnalyticsPage() {
  return (
    <div className="ml-64 p-6 bg-zinc-950 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-zinc-900 p-4 rounded shadow">
          <p className="text-gray-400 text-sm">Appointments This Week</p>
          <p className="text-2xl font-semibold">126</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded shadow">
          <p className="text-gray-400 text-sm">Average Wait Time</p>
          <p className="text-2xl font-semibold">12 mins</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded shadow">
          <p className="text-gray-400 text-sm">Doctor Utilization</p>
          <p className="text-2xl font-semibold">89%</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded shadow">
          <p className="text-gray-400 text-sm">Patient Satisfaction</p>
          <p className="text-2xl font-semibold">4.5 ★</p>
        </div>
      </div>

      <div className="bg-zinc-900 p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Appointments Over the Week</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="appointments" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
