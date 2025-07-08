# PayCodes

PayCodes is a lightweight toolkit for payment processing professionals. It combines MCC & chargeback code search, a fee breakdown calculator, and statement analysis in one app.

## Project Structure

- `client/` – React front end powered by Vite
- `server/` – Node.js/Express API with MongoDB

## Getting Started

1. Install dependencies for both client and server.

```bash
cd server && npm install
cd ../client && npm install
```

2. Create a `.env` file in `server/` based on `.env.example`. Set `MONGO_URI` to your MongoDB Atlas connection string and then start the API:

```bash
npm run dev
```

3. In another terminal, start the React development server:

```bash
npm run dev
```

The client will be available at `http://localhost:3000` and the API at `http://localhost:5000`.

### Verifying Vercel Integration

1. In the Vercel dashboard, open your PayCodes project and navigate to **Settings → Git**.
2. Confirm that the Git repository listed matches this project. Every push to the `main` branch should trigger a deployment visible under **Deployments**.
3. You can also run `npx vercel ls` locally to see recent deployments if you have the Vercel CLI installed.

## Core Features (planned)

- MCC & Chargeback Code Wizard
- Processing Fee Breakdown Calculator
- Merchant Statement Analyzer


