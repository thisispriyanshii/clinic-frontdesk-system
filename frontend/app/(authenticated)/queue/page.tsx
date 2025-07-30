'use client';

import { useState } from 'react';

interface Patient {
  id: number;
  name: string;
  age: number;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Waiting' | 'In Progress' | 'Completed';
  doctor: string;
  estimatedWait: string;
  checkInTime: string;
  symptoms: string;
}

export default function QueuePage() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      name: 'Alice Johnson',
      age: 28,
      priority: 'High',
      status: 'Waiting',
      doctor: 'Dr. Sarah Smith',
      estimatedWait: '15 min',
      checkInTime: '09:30 AM',
      symptoms: 'Severe headache, fever'
    },
    {
      id: 2,
      name: 'Bob Wilson',
      age: 45,
      priority: 'Medium',
      status: 'In Progress',
      doctor: 'Dr. Michael Davis',
      estimatedWait: '5 min',
      checkInTime: '09:15 AM',
      symptoms: 'Chest pain, shortness of breath'
    },
    {
      id: 3,
      name: 'Carol Brown',
      age: 32,
      priority: 'Low',
      status: 'Waiting',
      doctor: 'Dr. Emily Lee',
      estimatedWait: '25 min',
      checkInTime: '09:45 AM',
      symptoms: 'Routine checkup'
    },
    {
      id: 4,
      name: 'David Miller',
      age: 55,
      priority: 'High',
      status: 'Waiting',
      doctor: 'Dr. James Garcia',
      estimatedWait: '10 min',
      checkInTime: '09:20 AM',
      symptoms: 'Severe abdominal pain'
    },
    {
      id: 5,
      name: 'Emma Davis',
      age: 29,
      priority: 'Medium',
      status: 'Completed',
      doctor: 'Dr. Sarah Smith',
      estimatedWait: '0 min',
      checkInTime: '08:30 AM',
      symptoms: 'Sore throat, cough'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const handleStatusChange = (id: number, newStatus: Patient['status']) => {
    setPatients(patients.map(patient => 
      patient.id === id ? { ...patient, status: newStatus } : patient
    ));
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || patient.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || patient.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority: Patient['priority']) => {
    switch (priority) {
      case 'High': return 'bg-red-600 text-white';
      case 'Medium': return 'bg-yellow-600 text-white';
      case 'Low': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getStatusColor = (status: Patient['status']) => {
    switch (status) {
      case 'Waiting': return 'bg-blue-600 text-white';
      case 'In Progress': return 'bg-yellow-600 text-white';
      case 'Completed': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const queueStats = {
    total: patients.length,
    waiting: patients.filter(p => p.status === 'Waiting').length,
    inProgress: patients.filter(p => p.status === 'In Progress').length,
    completed: patients.filter(p => p.status === 'Completed').length,
    highPriority: patients.filter(p => p.priority === 'High').length
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white w-full">
      {/* Header Section */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="w-full px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold text-white">
                Patient Queue
              </h1>
              <p className="text-zinc-400 mt-1">Manage patient flow and prioritize care</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors font-medium">
                📊 Export Queue
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium">
                ➕ Add Patient
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Total Patients</p>
                <p className="text-2xl font-bold text-white">{queueStats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👥</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Waiting</p>
                <p className="text-2xl font-bold text-blue-400">{queueStats.waiting}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⏳</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">In Progress</p>
                <p className="text-2xl font-bold text-yellow-400">{queueStats.inProgress}</p>
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
                <p className="text-2xl font-bold text-green-400">{queueStats.completed}</p>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✅</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">High Priority</p>
                <p className="text-2xl font-bold text-red-400">{queueStats.highPriority}</p>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🚨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Search Patients</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or doctor..."
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
                className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Waiting">Waiting</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Priority Filter</label>
              <select
                className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="All">All Priorities</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
          </div>
        </div>

        {/* Queue List */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800">
            <h2 className="text-xl font-semibold text-white">Current Queue</h2>
          </div>
          
          <div className="divide-y divide-zinc-800">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-lg">{patient.name.charAt(0)}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-semibold text-white text-lg">{patient.name}</h3>
                        <span className="text-sm text-zinc-400">({patient.age} years)</span>
                      </div>
                      <p className="text-sm text-zinc-400">{patient.doctor}</p>
                      <p className="text-xs text-zinc-500 mt-1">{patient.symptoms}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
                    <div className="text-right">
                      <p className="font-medium text-white">Check-in: {patient.checkInTime}</p>
                      <p className="text-sm text-zinc-400">Wait: {patient.estimatedWait}</p>
                    </div>
                    
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(patient.priority)}`}>
                      {patient.priority} Priority
                    </span>
                    
                    <select
                      className="px-3 py-1 border border-zinc-700 bg-zinc-800 text-white rounded-lg text-sm focus:ring-2 focus:ring-purple-500 transition-colors"
                      value={patient.status}
                      onChange={(e) => handleStatusChange(patient.id, e.target.value as Patient['status'])}
                    >
                      <option value="Waiting">Waiting</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPatients.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-zinc-400 text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No patients found</h3>
              <p className="text-zinc-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
