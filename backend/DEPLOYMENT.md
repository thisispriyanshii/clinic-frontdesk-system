# Backend Deployment Guide for Render

## Environment Variables Setup

Set these environment variables in your Render dashboard:

### Database Configuration
```
DB_HOST=your-database-host.render.com
DB_PORT=3306
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
```

### JWT Configuration
```
JWT_SECRET=your-super-secret-jwt-key-here
```

### Application Configuration
```
NODE_ENV=production
PORT=3001
```

### CORS Configuration
```
CORS_ORIGIN=https://friendly-sundae-b51794.netlify.app
```

## Database Setup

1. Create a MySQL database on Render or use an external service
2. Make sure SSL is enabled for the database connection
3. Update the environment variables with your database credentials

## Build Command
```
npm install && npm run build
```

## Start Command
```
npm run start:prod
```

## Important Notes

- The backend is configured to use SSL for database connections
- CORS is enabled for the frontend domain
- JWT authentication is configured for 24-hour tokens
- Database synchronization is disabled in production 