'use client';

import { useState } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  patientsToday: number;
  availability: 'Available' | 'Busy' | 'Off Duty';
  image?: string;
  phone: string;
  email: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      specialization: 'Cardiology',
      experience: '15 years',
      rating: 4.8,
      patientsToday: 12,
      availability: 'Available',
      phone: '+1 (555) 123-4567',
      email: 'sarah.smith@clinic.com'
    },
    {
      id: 2,
      name: 'Dr. Michael Davis',
      specialization: 'Neurology',
      experience: '12 years',
      rating: 4.9,
      patientsToday: 8,
      availability: 'Busy',
      phone: '+1 (555) 234-5678',
      email: 'michael.davis@clinic.com'
    },
    {
      id: 3,
      name: 'Dr. Emily Lee',
      specialization: 'Pediatrics',
      experience: '8 years',
      rating: 4.7,
      patientsToday: 15,
      availability: 'Available',
      phone: '+1 (555) 345-6789',
      email: 'emily.lee@clinic.com'
    },
    {
      id: 4,
      name: 'Dr. James Garcia',
      specialization: 'Orthopedics',
      experience: '20 years',
      rating: 4.6,
      patientsToday: 6,
      availability: 'Off Duty',
      phone: '+1 (555) 456-7890',
      email: 'james.garcia@clinic.com'
    },
    {
      id: 5,
      name: 'Dr. Lisa Johnson',
      specialization: 'Dermatology',
      experience: '10 years',
      rating: 4.9,
      patientsToday: 10,
      availability: 'Available',
      phone: '+1 (555) 567-8901',
      email: 'lisa.johnson@clinic.com'
    },
    {
      id: 6,
      name: 'Dr. Robert Wilson',
      specialization: 'Psychiatry',
      experience: '18 years',
      rating: 4.8,
      patientsToday: 5,
      availability: 'Busy',
      phone: '+1 (555) 678-9012',
      email: 'robert.wilson@clinic.com'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = specializationFilter === 'All' || doctor.specialization === specializationFilter;
    const matchesAvailability = availabilityFilter === 'All' || doctor.availability === availabilityFilter;
    return matchesSearch && matchesSpecialization && matchesAvailability;
  });

  const getAvailabilityColor = (availability: Doctor['availability']) => {
    switch (availability) {
      case 'Available': return 'bg-green-600 text-white';
      case 'Busy': return 'bg-yellow-600 text-white';
      case 'Off Duty': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getSpecializationColor = (specialization: string) => {
    const colors = [
      'bg-blue-600 text-white',
      'bg-purple-600 text-white',
      'bg-green-600 text-white',
      'bg-orange-600 text-white',
      'bg-pink-600 text-white',
      'bg-indigo-600 text-white'
    ];
    return colors[specialization.length % colors.length];
  };

  const doctorStats = {
    total: doctors.length,
    available: doctors.filter(d => d.availability === 'Available').length,
    busy: doctors.filter(d => d.availability === 'Busy').length,
    offDuty: doctors.filter(d => d.availability === 'Off Duty').length,
    averageRating: (doctors.reduce((sum, d) => sum + d.rating, 0) / doctors.length).toFixed(1)
  };

  const specializations = ['All', ...Array.from(new Set(doctors.map(d => d.specialization)))];

  return (
    <div className="min-h-screen bg-zinc-950 text-white w-full">
      {/* Header Section */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="w-full px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold text-white">
                Doctor Management
              </h1>
              <p className="text-zinc-400 mt-1">Manage and monitor doctor profiles and schedules</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors font-medium">
                📊 Export Report
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium">
                ➕ Add Doctor
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
                <p className="text-sm font-medium text-zinc-400">Total Doctors</p>
                <p className="text-2xl font-bold text-white">{doctorStats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👨‍⚕️</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Available</p>
                <p className="text-2xl font-bold text-green-400">{doctorStats.available}</p>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✅</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Busy</p>
                <p className="text-2xl font-bold text-yellow-400">{doctorStats.busy}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🔄</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Off Duty</p>
                <p className="text-2xl font-bold text-red-400">{doctorStats.offDuty}</p>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🚫</span>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:bg-zinc-800 transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">Avg Rating</p>
                <p className="text-2xl font-bold text-purple-400">{doctorStats.averageRating}</p>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Search Doctors</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or specialization..."
                  className="w-full pl-10 pr-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-3 top-3 text-zinc-400">🔍</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Specialization</label>
              <select
                className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Availability</label>
              <select
                className="w-full px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
                <option value="Off Duty">Off Duty</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:bg-zinc-800 transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-lg">{doctor.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{doctor.name}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSpecializationColor(doctor.specialization)}`}>
                        {doctor.specialization}
                      </span>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(doctor.availability)}`}>
                    {doctor.availability}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Experience:</span>
                    <span className="font-medium text-white">{doctor.experience}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <span className="font-medium text-white">{doctor.rating}</span>
                      <span className="text-yellow-400">⭐</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Patients Today:</span>
                    <span className="font-medium text-white">{doctor.patientsToday}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Phone:</span>
                    <span className="font-medium text-white">{doctor.phone}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Email:</span>
                    <span className="font-medium text-white truncate">{doctor.email}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View Profile
                  </button>
                  <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDoctors.length === 0 && (
          <div className="col-span-full p-12 text-center">
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-zinc-400 text-2xl">👨‍⚕️</span>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No doctors found</h3>
            <p className="text-zinc-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
