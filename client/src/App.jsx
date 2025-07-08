import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MccLookup from './pages/MccLookup';
import ProcessorCodes from './pages/ProcessorCodes';
import ChargebackCodes from './pages/ChargebackCodes';
import StatementUpload from './pages/StatementUpload';
import FeeCalculator from './pages/FeeCalculator';
import Settings from './pages/Settings';
import Reports from './pages/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MccLookup />} />
          <Route path="/processor-codes" element={<ProcessorCodes />} />
          <Route path="/chargeback-codes" element={<ChargebackCodes />} />
          <Route path="/statement-analysis" element={<StatementUpload />} />
          <Route path="/fee-checker" element={<FeeCalculator />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
