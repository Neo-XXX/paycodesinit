import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FeeCalculator from './pages/FeeCalculator';
import StatementUpload from './pages/StatementUpload';
import CodeLookup from './pages/CodeLookup';
import Reports from './pages/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calculator" element={<FeeCalculator />} />
          <Route path="/statement" element={<StatementUpload />} />
          <Route path="/codes" element={<CodeLookup />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
