'use client';

import { useState } from 'react';
import BookAppointmentModel from '@/components/BookAppointmentModel';

interface Appointment {
  id: number;
  patientName: string;
  doctor: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = (newAppt: {
    patientName: string;
    doctor: string;
    time: string;
  }) => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      ...newAppt,
      status: 'Scheduled',
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📅 Appointments</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          ➕ Book Appointment
        </button>
      </div>

      <BookAppointmentModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments booked yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-6 py-3 font-medium">#</th>
                <th className="px-6 py-3 font-medium">Patient</th>
                <th className="px-6 py-3 font-medium">Doctor</th>
                <th className="px-6 py-3 font-medium">Time</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{appt.id}</td>
                  <td className="px-6 py-4">{appt.patientName}</td>
                  <td className="px-6 py-4">{appt.doctor}</td>
                  <td className="px-6 py-4">{appt.time}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
