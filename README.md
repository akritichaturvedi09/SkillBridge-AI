# AI Interview Preparation Platform

An intelligent interview preparation platform that uses AI to analyze resumes, generate personalized interview questions, identify skill gaps, and create tailored preparation plans.

## Features

- **Resume Analysis**: Upload your resume and get AI-powered insights
- **Job Matching**: Calculate match scores between your profile and job descriptions
- **Interview Questions**: Get technical and behavioral questions with detailed answers
- **Skill Gap Analysis**: Identify areas for improvement with severity ratings
- **Preparation Plans**: Receive day-wise preparation roadmaps
- **Resume Generation**: Create ATS-friendly, job-tailored resumes in PDF format
- **User Authentication**: Secure registration and login with JWT tokens

## Tech Stack

### Backend
- Node.js & Express
- MongoDB with Mongoose
- Google Generative AI (Gemini)
- JWT Authentication
- Puppeteer for PDF generation
- Multer for file uploads
- Zod for schema validation

### Frontend
- React 19
- React Router
- Axios for API calls
- SASS for styling
- Vite for build tooling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google Generative AI API Key

## Installation

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:

```env
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:3000`

### Frontend Setup

```bash
cd Frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Interview Reports
- `POST /api/interview/generate` - Generate interview report
- `GET /api/interview/:id` - Get interview report by ID
- `GET /api/interview` - Get all interview reports for user
- `POST /api/interview/resume-pdf` - Generate tailored resume PDF

## Project Structure

```
├── Backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Route controllers
│   │   ├── middlewares/     # Auth & file upload middlewares
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   └── services/        # AI service integration
│   └── server.js            # Entry point
│
└── Frontend/
    └── src/
        ├── features/
        │   ├── auth/        # Authentication feature
        │   └── interview/   # Interview feature
        └── App.jsx          # Main app component
```

## Usage

1. Register an account or login
2. Upload your resume (PDF format)
3. Provide a self-description and job description
4. Generate an interview report with:
   - Match score
   - Technical questions with answers
   - Behavioral questions with answers
   - Skill gap analysis
   - Day-wise preparation plan
5. Generate a tailored resume PDF for the specific job

## License

ISC
