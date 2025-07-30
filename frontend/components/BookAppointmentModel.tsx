'use client';

import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onBook: (appointment: {
    patientName: string;
    doctor: string;
    time: string;
  }) => void;
}

export default function BookAppointmentModel({ isOpen, onClose, onBook }: Props) {
  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (patientName && doctor && time) {
      onBook({ patientName, doctor, time });
      setPatientName('');
      setDoctor('');
      setTime('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Book New Appointment</h2>

        <input
          type="text"
          placeholder="Patient Name"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <select
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          <option value="Dr. Mehta">Dr. Mehta</option>
          <option value="Dr. Kapoor">Dr. Kapoor</option>
          <option value="Dr. Rao">Dr. Rao</option>
        </select>

        <input
          type="time"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
