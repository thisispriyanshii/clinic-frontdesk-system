'use client';

import { useState } from 'react';
import BookAppointmentModel from '@/components/BookAppointmentModel';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = (newAppt: {
    patientName: string;
    doctor: string;
    time: string;
  }) => {
    console.log('New appointment:', newAppt);
  };

  const stats = [
    {
      title: 'Total Patients',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: '👥',
      color: 'purple'
    },
    {
      title: 'Today\'s Appointments',
      value: '28',
      change: '+5',
      changeType: 'positive',
      icon: '👥',
      color: 'purple'
    }
  ];

  const recentAppointments = [
    {
      id: 1,
      patientName: 'Alice Johnson',
      doctor: 'Dr. Sarah Smith',
      time: '10:00 AM',
      status: 'In Progress',
      type: 'General Checkup'
    },
    {
      id: 2,
      patientName: 'Bob Wilson',
      doctor: 'Dr. Michael Davis',
      time: '11:30 AM',
      status: 'Scheduled',
      type: 'Consultation'
    },
    {
      id: 3,
      patientName: 'Carol Brown',
      doctor: 'Dr. Emily Lee',
      time: '2:00 PM',
      status: 'Completed',
      type: 'Specialist Visit'
    }
  ];

  const queueStatus = [
    { status: 'Waiting', count: 8, color: 'yellow' },
    { status: 'In Progress', count: 3, color: 'blue' },
    { status: 'Completed', count: 15, color: 'green' }
  ];

  const quickActions = [
    { title: 'Schedule Appointment', icon: '📅', color: 'blue' },
    { title: 'Add Patient', icon: '👤', color: 'green' },
    { title: 'View Queue', icon: '📋', color: 'purple' },
    { title: 'Generate Report', icon: '📊', color: 'orange' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-600 text-white';
      case 'green': return 'bg-green-600 text-white';
      case 'purple': return 'bg-purple-600 text-white';
      case 'yellow': return 'bg-yellow-600 text-white';
      case 'orange': return 'bg-orange-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-600 text-white';
      case 'In Progress': return 'bg-yellow-600 text-white';
      case 'Completed': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white w-full">
      {/* Header Section */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="w-full px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold text-white">
                Dashboard
              </h1>
              <p className="text-zinc-400 mt-1">Welcome back! Here's what's happening today.</p>
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

      {/* Main Content */}
      <div className="w-full px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-400' : 
                    stat.changeType === 'negative' ? 'text-red-400' : 'text-zinc-400'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                  <span className="text-xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Appointments */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800">
                <h2 className="text-xl font-semibold text-white">Recent Appointments</h2>
              </div>
              
              <div className="divide-y divide-zinc-800">
                {recentAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-6 hover:bg-zinc-800 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">{appointment.patientName.charAt(0)}</span>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-lg">{appointment.patientName}</h3>
                          <p className="text-sm text-zinc-400">{appointment.doctor}</p>
                          <p className="text-xs text-zinc-500 mt-1">{appointment.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-white">{appointment.time}</p>
                        </div>
                        
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Queue Status */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Queue Status</h3>
              <div className="space-y-3">
                {queueStatus.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-400">{item.status}</span>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getColorClasses(item.color)}`}>
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-lg transition-all hover:bg-zinc-800 ${getColorClasses(action.color)}`}
                  >
                    <div className="text-center">
                      <span className="text-2xl block mb-2">{action.icon}</span>
                      <span className="text-xs font-medium">{action.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Weekly Overview</h3>
              <div className="h-48 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
                <div className="text-center">
                  <span className="text-3xl mb-2 block">📊</span>
                  <p className="text-zinc-400 text-sm">Chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookAppointmentModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook}
      />
    </div>
  );
}
