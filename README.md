# Lead Management CRM

A full-stack Lead Management CRM built with React.js, Node.js, Express.js, and MongoDB.

> ⚠️ Note: This was my final practical assignment, so it got a little late — but it's fully complete and functional.

---

## Tech Stack

- **Frontend:** React.js (Vite) + Plain CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose

---

## Features

- Add new leads
- View all leads in a dashboard
- Update lead status (New, Contacted, Qualified, Converted, Lost)
- Edit lead details inline
- Delete leads
- Search by name, email, or company
- Filter by status
- Lead statistics dashboard
- Pagination
- Responsive design

---

## Project Structure

instaweb/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controller/
│   │   │   └── leadController.js
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   ├── models/
│   │   │   └── Lead.js
│   │   └── routes/
│   │       └── app.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── Frontend/
├── src/
│   ├── api/
│   │   └── leads.js
│   ├── components/
│   │   ├── LeadForm.jsx
│   │   ├── LeadTable.jsx
│   │   ├── SearchBar.jsx
│   │   └── Stats.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── AddLead.jsx
│   ├── App.jsx
│   └── App.css
└── package.json

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally

---

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend folder:

Run the server:

```bash
npm run dev
```

Backend runs on `http://localhost:3000`

---

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/leads` | Get all leads |
| GET | `/api/leads?search=john` | Search leads |
| GET | `/api/leads?status=New` | Filter by status |
| GET | `/api/leads?page=1&limit=10` | Pagination |
| GET | `/api/leads/stats` | Lead statistics |
| GET | `/api/leads/:id` | Get single lead |
| POST | `/api/leads` | Create new lead |
| PUT | `/api/leads/:id` | Update lead |
| DELETE | `/api/leads/:id` | Delete lead |

---

## Lead Fields

| Field | Type | Required |
|-------|------|----------|
| name | String | Yes |
| email | String | Yes |
| phone | String | Yes |
| company | String | Yes |
| status | Enum | Yes |
| notes | String | No |
| createdAt | Date | Auto |

---

## Lead Status Values

- `New`
- `Contacted`
- `Qualified`
- `Converted`
- `Lost`

---

## Note

This project was my **final practical assignment**. It got submitted a little late, but the implementation is complete with all required features — CRUD operations, search, filter, pagination, and a statistics dashboard.