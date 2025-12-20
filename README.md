# DRG Travel & Tours

A full-stack travel agency web application for my parents' travel business. This is a home-based travel agency mostly run by my mother. It currently has a Facebook page, Tiktok page, and Instagram page, and now a complete website with API backend.

## 📁 Project Structure

```
DATASTALGO-Quiz1/
├── backend/                    # Django REST Framework Backend
│   ├── travel_api/             # Main Django project settings
│   │   ├── __init__.py
│   │   ├── settings.py         # Django settings with CORS config
│   │   ├── urls.py             # Main URL routing
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── destinations/           # Destinations app
│   │   ├── __init__.py
│   │   ├── admin.py            # Admin configuration
│   │   ├── apps.py
│   │   ├── models.py           # Destination & TravelPackage models
│   │   ├── serializers.py      # DRF serializers
│   │   ├── urls.py             # API URL patterns
│   │   └── views.py            # API views (List, Detail, Routes)
│   ├── .env                    # Backend environment variables
│   ├── .env.example            # Environment template
│   ├── .gitignore              # Git ignore for backend
│   ├── db.sqlite3              # SQLite database (included)
│   ├── manage.py               # Django management script
│   ├── requirements.txt        # Python dependencies
│   └── seed_data.py            # Database seeding script
├── public/                     # React public assets
├── src/                        # React source code
│   ├── Components/
│   │   ├── ApiInfo.jsx         # API endpoints display
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── SceneryGallery.jsx  # Destinations from API
│   │   └── TravelPackages.jsx  # Packages from API
│   ├── services/
│   │   └── api.js              # Axios API service
│   ├── App.js
│   └── index.js
├── .env                        # Frontend environment variables
├── .env.example                # Frontend environment template
├── package.json
└── README.md
```

## 🚀 Features

### Frontend (React)
- Home page with company info and travel photos
- Navigation links (About, Services, Gallery)
- **Scenery Gallery** - Fetches destinations from API using Axios
- **Travel Packages** - Displays available packages from API
- **API Info** - Shows all available API endpoints
- Contact information section
- Responsive design with Bootstrap

### Backend (Django REST Framework)
- RESTful API with proper serialization
- Three required API views:
  1. **List View** - Returns all destinations/packages
  2. **Detail View** - Returns specific destination/package by ID
  3. **API Routes View** - Returns list of all available endpoints
- CORS properly configured (using `CORS_ALLOWED_ORIGINS`, NOT `CORS_ALLOW_ALL_ORIGINS`)
- Environment variables for configuration
- SQLite database included

## 🔧 Environment Variables

### Backend (.env)
```env
DJANGO_SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:8000/api
```

> **Note:** React environment variables must be prefixed with `REACT_APP_` to be accessible.

## 📦 Installation & Setup

### Prerequisites
- Python 3.8+ installed
- Node.js 16+ and npm installed
- Git installed

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd DATASTALGO-Quiz1
```

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file (then edit if needed)
copy .env.example .env   # Windows
# cp .env.example .env   # macOS/Linux

# Run migrations
python manage.py migrate

# Seed the database with sample data
python manage.py shell < seed_data.py

# Create superuser (optional, for admin access)
python manage.py createsuperuser

# Start the backend server
python manage.py runserver
```

The backend API will be available at: `http://localhost:8000/api/`

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to project root
cd DATASTALGO-Quiz1

# Install dependencies (includes Axios)
npm install

# Copy environment file
copy .env.example .env   # Windows
# cp .env.example .env   # macOS/Linux

# Start the frontend development server
npm start
```

The frontend will be available at: `http://localhost:3000`

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/` | GET | Returns list of all available API endpoints |
| `/api/destinations/` | GET | Returns all travel destinations (List View) |
| `/api/destinations/<id>/` | GET | Returns a specific destination (Detail View) |
| `/api/packages/` | GET | Returns all travel packages (List View) |
| `/api/packages/<id>/` | GET | Returns a specific package (Detail View) |

### Example API Response

**GET /api/destinations/**
```json
[
  {
    "id": 1,
    "name": "Mt. Pinatubo",
    "location": "Zambales, Philippines",
    "description": "Experience the majestic beauty...",
    "image_url": "/MtPinatubo.jpg",
    "price": "2500.00",
    "duration": "1 Day",
    "is_featured": true,
    "created_at": "2024-12-20T10:00:00Z",
    "updated_at": "2024-12-20T10:00:00Z"
  }
]
```

**GET /api/**
```json
{
  "message": "Welcome to DRG Travel & Tours API",
  "api_version": "1.0",
  "endpoints": [
    {
      "endpoint": "/api/",
      "method": "GET",
      "description": "Returns a list of all available API endpoints"
    },
    ...
  ]
}
```

## 🔒 CORS Configuration

CORS is properly configured in `backend/travel_api/settings.py`:

```python
# IMPORTANT: CORS_ALLOW_ALL_ORIGINS is NOT used (as per requirements)
# Using CORS_ALLOWED_ORIGINS instead for security
CORS_ALLOWED_ORIGINS = os.getenv(
    'CORS_ALLOWED_ORIGINS', 
    'http://localhost:3000,http://127.0.0.1:3000'
).split(',')
```

## 🗃️ Database Models

### Destination
- `name` - Destination name
- `location` - Location/Country
- `description` - Detailed description
- `image_url` - Image path/URL
- `price` - Starting price (PHP)
- `duration` - Tour duration
- `is_featured` - Featured flag

### TravelPackage
- `title` - Package title
- `destination` - Foreign key to Destination
- `package_type` - Type (domestic, international, adventure, etc.)
- `description` - Package description
- `inclusions` - What's included
- `exclusions` - What's not included
- `price` - Package price (PHP)
- `max_guests` - Maximum guests
- `is_available` - Availability flag

## 🧪 Running Both Servers

You need two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
npm start
```

## 📝 Admin Panel

Access Django Admin at: `http://localhost:8000/admin/`

Login with the superuser credentials you created during setup.

## 🎯 Quiz 2 Requirements Checklist

- ✅ Backend API connected to frontend using Axios
- ✅ Environment variables for both frontend and backend
- ✅ Three API views: List, Detail, API Routes
- ✅ CORS configured with `CORS_ALLOWED_ORIGINS` (not `CORS_ALLOW_ALL_ORIGINS`)
- ✅ Appropriate models for startup business (Destination, TravelPackage)
- ✅ Proper serialization of API data
- ✅ requirements.txt included
- ✅ .gitignore (excludes venv, includes db.sqlite3)
- ✅ Detailed README.md
- ✅ Frontend and backend in same repository
- ✅ db.sqlite3 included in backend

## 📞 Contact

**DRG Travel & Tours**
- Email: drg.traveltourservice@gmail.com
- Phone: +63 968 526 8328
- WhatsApp: +63 968 526 8328
- Facebook: https://www.facebook.com/share/1BWFMHXwJJ/
- Office Hours: Monday - Friday, 9:00 AM - 6:00 PM (PST)
