'use client';

import { useState } from 'react';
import BookAppointmentModel from '@/components/BookAppointmentModel';

interface Appointment {
  id: number;
  patientName: string;
  doctor: string;
  time: string;
  date: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'In Progress';
  type: string;
  notes?: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'Alice Johnson',
      doctor: 'Dr. Sarah Smith',
      time: '10:00 AM',
      date: '2024-12-15',
      status: 'Scheduled',
      type: 'General Checkup',
      notes: 'Annual physical examination'
    },
    {
      id: 2,
      patientName: 'Bob Wilson',
      doctor: 'Dr. Michael Davis',
      time: '11:30 AM',
      date: '2024-12-15',
      status: 'In Progress',
      type: 'Consultation',
      notes: 'Follow-up appointment'
    },
    {
      id: 3,
      patientName: 'Carol Brown',
      doctor: 'Dr. Emily Lee',
      time: '2:00 PM',
      date: '2024-12-15',
      status: 'Completed',
      type: 'Specialist Visit',
      notes: 'Cardiology consultation'
    },
    {
      id: 4,
      patientName: 'David Miller',
      doctor: 'Dr. James Garcia',
      time: '3:30 PM',
      date: '2024-12-15',
      status: 'Scheduled',
      type: 'Emergency',
      notes: 'Urgent care needed'
    }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleBook = (newAppt: {
    patientName: string;
    doctor: string;
    time: string;
  }) => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      ...newAppt,
      date: new Date().toISOString().split('T')[0],
      status: 'Scheduled',
      type: 'General Checkup'
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const handleStatusChange = (id: number, newStatus: Appointment['status']) => {
    setAppointments(appointments.map(appt => 
      appt.id === id ? { ...appt, status: newStatus } : appt
    ));
  };

  const filteredAppointments = appointments.filter(appt => {
    const matchesSearch = appt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appt.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || appt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-600 text-white';
      case 'In Progress': return 'bg-yellow-600 text-white';
      case 'Completed': return 'bg-green-600 text-white';
      case 'Cancelled': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Emergency': return 'bg-red-600 text-white';
      case 'Specialist Visit': return 'bg-purple-600 text-white';
      case 'Consultation': return 'bg-orange-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const appointmentStats = {
    total: appointments.length,
    scheduled: appointments.filter(a => a.status === 'Scheduled').length,
    inProgress: appointments.filter(a => a.status === 'In Progress').length,
    completed: appointments.filter(a => a.status === 'Completed').length
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white w-full">
      {/* Header Section */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="w-full px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold text-white">
                Appointment Management
              </h1>
              <p className="text-zinc-400 mt-1">Schedule and manage patient appointments efficiently</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex bg-zinc-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'list' 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  📋 List View
                </button>
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'calendar' 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  📅 Calendar View
                </button>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium"
              >
                ➕ Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Total Appointments</p>
                <p className="text-2xl font-bold text-white">{appointmentStats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📅</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Scheduled</p>
                <p className="text-2xl font-bold text-blue-400">{appointmentStats.scheduled}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⏰</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">In Progress</p>
                <p className="text-2xl font-bold text-yellow-400">{appointmentStats.inProgress}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🔄</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Completed</p>
                <p className="text-2xl font-bold text-green-400">{appointmentStats.completed}</p>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-zinc-300 mb-2">Search Appointments</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by patient or doctor name..."
                  className="w-full pl-10 pr-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-3 top-3 text-zinc-400">🔍</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Status Filter</label>
              <select
                className="px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        {viewMode === 'list' && (
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800">
              <h2 className="text-xl font-semibold text-white">Today's Appointments</h2>
            </div>
            
            <div className="divide-y divide-zinc-800">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="p-6 hover:bg-zinc-800 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-lg">{appointment.patientName.charAt(0)}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg">{appointment.patientName}</h3>
                        <p className="text-sm text-zinc-400">{appointment.doctor}</p>
                        <p className="text-xs text-zinc-500 mt-1">{appointment.notes}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
                      <div className="text-right">
                        <p className="font-medium text-white">{appointment.time}</p>
                        <p className="text-sm text-zinc-400">{appointment.date}</p>
                      </div>
                      
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(appointment.type)}`}>
                        {appointment.type}
                      </span>
                      
                      <select
                        className="px-3 py-1 border border-zinc-700 bg-zinc-800 text-white rounded-lg text-sm focus:ring-2 focus:ring-purple-500 transition-colors"
                        value={appointment.status}
                        onChange={(e) => handleStatusChange(appointment.id, e.target.value as Appointment['status'])}
                      >
                        <option value="Scheduled">Scheduled</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredAppointments.length === 0 && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-zinc-400 text-2xl">📅</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">No appointments found</h3>
                <p className="text-zinc-400">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Calendar View</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-zinc-400 hover:text-white transition-colors">‹</button>
                <span className="px-3 py-1 font-medium text-white">December 2024</span>
                <button className="px-3 py-1 text-zinc-400 hover:text-white transition-colors">›</button>
              </div>
            </div>
            
            <div className="h-96 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
              <div className="text-center">
                <span className="text-4xl mb-4 block">📅</span>
                <p className="text-zinc-400 text-lg">Calendar component will be displayed here</p>
                <p className="text-zinc-500 text-sm mt-2">Interactive calendar with appointment scheduling</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <BookAppointmentModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />
    </div>
  );
}
