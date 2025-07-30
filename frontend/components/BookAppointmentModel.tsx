'use client';

import { useState } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  availability: string;
}

interface BookAppointmentModelProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: (appointment: { patientName: string; doctor: string; time: string }) => void;
}

export default function BookAppointmentModel({ isOpen, onClose, onBook }: BookAppointmentModelProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
    time: '',
    type: 'General Checkup',
    notes: '',
    phone: ''
  });

  const doctors: Doctor[] = [
    { id: 1, name: 'Dr. Sarah Smith', specialization: 'Cardiology', availability: 'Available' },
    { id: 2, name: 'Dr. Michael Davis', specialization: 'Neurology', availability: 'Available' },
    { id: 3, name: 'Dr. Emily Lee', specialization: 'Pediatrics', availability: 'Busy' },
    { id: 4, name: 'Dr. James Garcia', specialization: 'Orthopedics', availability: 'Available' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      patientName: formData.patientName,
      doctor: formData.doctor,
      time: `${formData.date} ${formData.time}`
    });
    onClose();
    setFormData({
      patientName: '',
      doctor: '',
      date: '',
      time: '',
      type: 'General Checkup',
      notes: '',
      phone: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Schedule New Appointment</h2>
              <p className="text-zinc-400 mt-1">Enter the appointment details below</p>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <span className="text-zinc-400 text-lg">×</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
          {/* Patient Name */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Patient Name *
            </label>
            <input
              type="text"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="Enter patient's full name"
              required
            />
          </div>

          {/* Doctor Selection */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Select Doctor *
            </label>
            <select
              value={formData.doctor}
              onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
              className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              required
            >
              <option value="">Choose a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name} - {doctor.specialization}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Time *
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
              >
                <option value="">Select time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Appointment Type */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Appointment Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
            >
              <option value="General Checkup">General Checkup</option>
              <option value="Consultation">Consultation</option>
              <option value="Emergency">Emergency</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Specialist Visit">Specialist Visit</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="Enter phone number"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
              rows={3}
              placeholder="Any additional notes or symptoms..."
            />
          </div>

          {/* Available Doctors Preview */}
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-white mb-3">Available Doctors Today</h3>
            <div className="space-y-2">
              {doctors.map((doc) => (
                <div key={doc.id} className="flex items-center space-x-3 p-3 bg-zinc-700 rounded-lg border border-zinc-600">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👨‍⚕️</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{doc.name}</p>
                    <p className="text-xs text-zinc-400">{doc.specialization}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    doc.availability === 'Available' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>
                    {doc.availability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-zinc-800 bg-zinc-800 rounded-b-2xl">
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-zinc-600 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
