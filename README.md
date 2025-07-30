# 🏥 Clinic Front Desk Management System

A modern, full-stack web application for managing clinic front desk operations with a beautiful dark-themed UI.

## ✨ Features

- **🔐 Authentication**: Secure login with JWT tokens
- **📊 Dashboard**: Real-time statistics and clinic overview
- **👥 Queue Management**: Patient queue with status tracking
- **📅 Appointments**: Schedule and manage appointments
- **👨‍⚕️ Doctor Management**: Doctor profiles and availability
- **📈 Analytics**: Performance insights and reports

## 🛠️ Technology Stack

**Backend**: NestJS, MySQL, TypeORM, JWT  
**Frontend**: Next.js, Tailwind CSS, TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MySQL Database
- npm package manager

### 1. Database Setup
1. Create a MySQL database named `clinic`
2. Update database credentials in `backend/src/app.module.ts`:
   ```typescript
   {
     host: 'localhost',
     port: 3306,
     username: 'root',
     password: 'your_mysql_password',
     database: 'clinic',
   }
   ```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Run the Application

**Start Backend (Port 3000):**
```bash
cd backend
npm run start:dev
```

**Start Frontend (Port 3001):**
```bash
cd frontend
npm run dev
```

### 4. Access the Application
- Open browser and go to: `http://localhost:3001`
- Login with demo credentials:
  - **Username**: `frontdesk`
  - **Password**: `password123`

## 📁 Project Structure

```
clinic-frontdesk-system/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── auth/           # Authentication
│   │   ├── user/           # User management
│   │   └── main.ts         # Entry point
│   └── package.json
├── frontend/               # Next.js Frontend
│   ├── app/
│   │   ├── (authenticated)/ # Protected pages
│   │   │   ├── dashboard/   # Dashboard
│   │   │   ├── queue/       # Queue management
│   │   │   ├── appointments/ # Appointments
│   │   │   ├── doctors/     # Doctor management
│   │   │   └── analytics/   # Analytics
│   │   ├── login/          # Login page
│   │   └── layout.tsx      # Root layout
│   └── package.json
└── README.md
```

## 🎨 UI Features

- **Dark Theme**: Modern dark interface
- **Responsive Design**: Works on all devices
- **Interactive Components**: Smooth animations
- **Sidebar Navigation**: Easy page navigation

## 📱 Pages

- **Login** (`/login`): Secure authentication
- **Dashboard** (`/dashboard`): Overview and statistics
- **Queue** (`/queue`): Patient queue management
- **Appointments** (`/appointments`): Schedule and track appointments
- **Doctors** (`/doctors`): Doctor profiles and management
- **Analytics** (`/analytics`): Performance insights

## 🔧 Troubleshooting

**Port Issues:**
- Backend runs on port 3000
- Frontend runs on port 3001
- Make sure ports are not in use

**Database Connection:**
- Verify MySQL is running
- Check database credentials in `backend/src/app.module.ts`
- Ensure database `clinic` exists

**Login Issues:**
- Use demo credentials: `frontdesk` / `password123`
- Check if backend is running on port 3000
- Verify API calls are pointing to correct backend URL
