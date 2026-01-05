# jobportal application...

## Description...

This is a job portal application where users can search for jobs, apply for jobs, and manage their profiles. Employers can post job listings, review applications, and manage their company profiles.


## Features..

- User registration and authentication
- Job search and filtering
- Job application management
- Employer job posting and management
- Candidate profile management
- Notifications for job applications and updates
- Candidates view application status
- Employers review and manage applications
- Admin dashboard for managing users and job listings

## Technologies Used...
- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT

## Recruiter...
- Post and manage job listings
- Review and manage candidate applications
- View analytics on job postings and applications
- Manage company profile
## Candidate...
- Search and filter job listings
- Apply for jobs and track application status
- Manage personal profile and resume
- Receive notifications for job updates and application status
## Admin...
- Manage users (candidates and recruiters)
- Oversee job listings and applications
- Generate reports and analytics
- Manage site settings and configurations


## Endpoints...
## Candidates
- `POST /api/candidates/register` - Register a new candidate
- `POST /api/candidates/login` - Candidate login
- `GET /api/candidates/profile` - Get candidate profile
- `PUT /api/candidates/profile` - Update candidate profile
- `GET /api/jobs` - Search and filter job listings
- `POST /api/jobs/:jobId/apply` - Apply for a job
- `GET /api/candidates/applications` - View candidate's job applications
## Recruiters
- `POST /api/recruiters/register` - Register a new recruiter
- `POST /api/recruiters/login` - Recruiter login
