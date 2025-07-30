'use client';

type Doctor = {
  id: number;
  name: string;
  specialization: string;
  status: 'Available' | 'Busy' | 'Off Duty';
  nextAvailable: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Smith',
    specialization: 'General Practice',
    status: 'Available',
    nextAvailable: 'Now',
  },
  {
    id: 2,
    name: 'Dr. Johnson',
    specialization: 'Pediatrics',
    status: 'Busy',
    nextAvailable: '2:30 PM',
  },
  {
    id: 3,
    name: 'Dr. Lee',
    specialization: 'Cardiology',
    status: 'Off Duty',
    nextAvailable: 'Tomorrow 9:00 AM',
  },
  {
    id: 4,
    name: 'Dr. Patel',
    specialization: 'Dermatology',
    status: 'Available',
    nextAvailable: 'Now',
  },
];

const statusBadgeColor = {
  Available: 'bg-green-600',
  Busy: 'bg-yellow-500',
  'Off Duty': 'bg-red-500',
};

export default function DoctorsPage() {
  return (
    <div className="ml-64 p-6 bg-zinc-950 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Available Doctors</h1>
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex items-center justify-between bg-zinc-900 p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold">
                {doctor.name.split(' ')[1][0]}
              </div>
              <div>
                <p className="font-semibold">{doctor.name}</p>
                <p className="text-sm text-gray-400">{doctor.specialization}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className={`text-sm px-2 py-1 rounded text-white ${statusBadgeColor[doctor.status]}`}
              >
                {doctor.status}
              </div>
              <p className="text-sm text-gray-400">
                Next available: {doctor.nextAvailable}
              </p>
              <button className="bg-white text-black px-3 py-1 rounded text-sm">
                View Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
