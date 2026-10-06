# 📊 Sales Dashboard

Demo project for learning Azure Pipelines (CI/CD). This package contains
**only the application code** — no `azure-pipelines.yml` yet, so you can
create the pipeline yourself as part of the assignment.

## Tech Stack
- Backend: Node.js + Express
- Frontend: HTML/CSS/Vanilla JS
- Testing: Jest + Supertest

## Setup

```bash
npm install
npm test     # run unit tests
npm start    # start server at http://localhost:3000
```

## Project Structure

```
sales-dashboard/
├── package.json
├── backend/
│   ├── server.js
│   ├── routes/api.js
│   └── tests/api.test.js
└── frontend/
    ├── index.html
    ├── style.css
    └── app.js
```

## API Endpoints

| Method | Endpoint          | Description            |
|--------|-------------------|-------------------------|
| GET    | /health            | Health check            |
| GET    | /api/sales         | List all sales records  |
| GET    | /api/summary       | Totals (sales, profit)  |
| GET    | /api/:id           | Get one record by id    |
| POST   | /api/sales         | Create a new record     |

## Next Step: Add Azure Pipelines

This repo intentionally has **no pipeline file**. To finish the assignment,
push this to GitHub, connect it to Azure DevOps, and create your own
`azure-pipelines.yml` that runs `npm install`, `npm test`, and `npm run build`.
