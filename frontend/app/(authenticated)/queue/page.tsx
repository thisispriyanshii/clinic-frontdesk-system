'use client';

import { useState } from 'react';

const initialQueue = [
  {
    id: 1,
    name: 'John Doe',
    status: 'Waiting',
    priority: 'Normal',
    arrival: '09:30 AM',
    waitTime: '15 min',
  },
  {
    id: 2,
    name: 'Jane Smith',
    status: 'With Doctor',
    priority: 'Normal',
    arrival: '09:45 AM',
    waitTime: '0 min',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    status: 'Waiting',
    priority: 'Urgent',
    arrival: '10:00 AM',
    waitTime: '5 min',
  },
];

export default function QueuePage() {
  const [queue, setQueue] = useState(initialQueue);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRemove = (id: number) => {
    setQueue(queue.filter((q) => q.id !== id));
  };

  const filteredQueue = queue.filter((q) =>
    q.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 ml-64 bg-zinc-950 text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Queue Management</h1>
        <div className="flex items-center gap-4">
          <select className="bg-zinc-800 text-white p-2 rounded">
            <option value="All">Filter: All</option>
            <option value="Waiting">Waiting</option>
            <option value="With Doctor">With Doctor</option>
          </select>
          <input
            type="text"
            placeholder="Search patients"
            className="p-2 rounded bg-zinc-800 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-zinc-900 p-4 rounded-md space-y-4">
        {filteredQueue.map((q, index) => (
          <div
            key={q.id}
            className="flex justify-between items-center border-b border-zinc-700 pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">{index + 1}</span>
              <div>
                <p className="font-semibold">{q.name}</p>
                <p className="text-sm text-gray-400">
                  Arrival: {q.arrival} • Est. Wait: {q.waitTime}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                className="bg-zinc-800 text-white px-2 py-1 rounded"
                defaultValue={q.status}
              >
                <option>Waiting</option>
                <option>With Doctor</option>
              </select>
              <select
                className="bg-zinc-800 text-white px-2 py-1 rounded"
                defaultValue={q.priority}
              >
                <option>Normal</option>
                <option>Urgent</option>
              </select>
              <button
                onClick={() => handleRemove(q.id)}
                className="text-sm bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full bg-white text-black py-2 font-medium rounded">
        Add New Patient to Queue
      </button>
    </div>
  );
}
