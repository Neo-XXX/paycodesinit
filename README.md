# PayCodes

PayCodes is a lightweight toolkit for payment processing professionals. It combines MCC & chargeback code search, a fee breakdown calculator and statement analysis in one app.

## Project Structure

- `client/` – React front‑end powered by Vite
- `api/` – Serverless functions used by Vercel
- `lib/` and `models/` – Database helpers and Mongoose models

## Getting Started

1. Install dependencies for both the root project and the React client:

```bash
npm install
npm install --prefix client
```

2. Create a `.env` file in the project root with your MongoDB connection string:

```bash
MONGO_URI=your_mongodb_uri
```

Optionally, you can define `VITE_API_URL` if the API lives on another host.

3. For local development run the Vercel dev server (which serves the API and the client together):

```bash
npm run dev
```

The web app will be available at `http://localhost:3000` and the API endpoint at `http://localhost:3000/api/mcc`.

4. To build the production assets for the client run:

```bash
npm run build
```

## Deployment

This project is configured for Vercel. Serverless functions live under `api/` and the React application is built into `client/dist`. The included `vercel.json` installs all dependencies and rewrites non‑API requests to the single‑page app.

## Core Features (planned)

- MCC & Chargeback Code Wizard
- Processing Fee Breakdown Calculator
- Merchant Statement Analyzer
