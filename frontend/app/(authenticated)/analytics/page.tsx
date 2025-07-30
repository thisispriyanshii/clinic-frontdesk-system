'use client';

import { useState } from 'react';

interface TopDoctor {
  id: number;
  name: string;
  specialization: string;
  patients: number;
  rating: number;
  revenue: string;
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('week');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$125,450',
      change: '+12.5%',
      changeType: 'positive',
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Total Patients',
      value: '2,847',
      change: '+8.2%',
      changeType: 'positive',
      icon: '👥',
      color: 'blue'
    },
    {
      title: 'Appointments',
      value: '1,234',
      change: '+15.3%',
      changeType: 'positive',
      icon: '📅',
      color: 'purple'
    },
    {
      title: 'Avg Wait Time',
      value: '18 min',
      change: '-5.2%',
      changeType: 'negative',
      icon: '⏱️',
      color: 'orange'
    }
  ];

  const topDoctors: TopDoctor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      specialization: 'Cardiology',
      patients: 156,
      rating: 4.9,
      revenue: '$28,450'
    },
    {
      id: 2,
      name: 'Dr. Michael Davis',
      specialization: 'Neurology',
      patients: 142,
      rating: 4.8,
      revenue: '$25,200'
    },
    {
      id: 3,
      name: 'Dr. Emily Lee',
      specialization: 'Pediatrics',
      patients: 138,
      rating: 4.9,
      revenue: '$22,800'
    },
    {
      id: 4,
      name: 'Dr. James Garcia',
      specialization: 'Orthopedics',
      patients: 125,
      rating: 4.7,
      revenue: '$20,150'
    },
    {
      id: 5,
      name: 'Dr. Lisa Johnson',
      specialization: 'Dermatology',
      patients: 118,
      rating: 4.8,
      revenue: '$18,900'
    }
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

  return (
    <div className="min-h-screen bg-zinc-950 text-white w-full">
      {/* Header Section */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="w-full px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold text-white">
                Analytics Dashboard
              </h1>
              <p className="text-zinc-400 mt-1">Comprehensive insights into clinic performance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex bg-zinc-800 rounded-lg p-1">
                <button
                  onClick={() => setTimeRange('week')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    timeRange === 'week' 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setTimeRange('month')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    timeRange === 'month' 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setTimeRange('year')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    timeRange === 'year' 
                      ? 'bg-zinc-700 text-white' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Year
                </button>
              </div>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium">
                📊 Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Appointment Trends */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Appointment Trends</h2>
              <span className="text-sm text-zinc-400">Last 30 days</span>
            </div>
            <div className="h-64 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
              <div className="text-center">
                <span className="text-4xl mb-4 block">📈</span>
                <p className="text-zinc-400 text-lg">Appointment trends chart</p>
                <p className="text-zinc-500 text-sm mt-2">Interactive line chart showing daily appointments</p>
              </div>
            </div>
          </div>

          {/* Specialization Distribution */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Specialization Distribution</h2>
              <span className="text-sm text-zinc-400">Patient visits</span>
            </div>
            <div className="h-64 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🥧</span>
                <p className="text-zinc-400 text-lg">Specialization pie chart</p>
                <p className="text-zinc-500 text-sm mt-2">Distribution of patient visits by department</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Doctors Table */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800">
            <h2 className="text-xl font-semibold text-white">Top Performing Doctors</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Patients
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-zinc-900 divide-y divide-zinc-800">
                {topDoctors.map((doctor, index) => (
                  <tr key={doctor.id} className="hover:bg-zinc-800 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-medium text-xs">{doctor.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{doctor.name}</div>
                          <div className="text-sm text-zinc-400">#{index + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-600 text-white">
                        {doctor.specialization}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {doctor.patients}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-white mr-1">{doctor.rating}</span>
                        <span className="text-yellow-400">⭐</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400">
                      {doctor.revenue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-400 hover:text-blue-300 mr-3">View</button>
                      <button className="text-green-400 hover:text-green-300">Schedule</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Peak Hours */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Peak Hours</h3>
            <div className="h-48 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
              <div className="text-center">
                <span className="text-3xl mb-2 block">⏰</span>
                <p className="text-zinc-400 text-sm">Peak hours analysis</p>
              </div>
            </div>
          </div>

          {/* Patient Satisfaction */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Patient Satisfaction</h3>
            <div className="h-48 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-700">
              <div className="text-center">
                <span className="text-3xl mb-2 block">😊</span>
                <p className="text-zinc-400 text-sm">Satisfaction metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
