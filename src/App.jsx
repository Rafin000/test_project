import AdminPage from "./components/AdminPage";
import NotFoundPage from "./components/NotFound";
import ViewPage from "./components/ViewPage";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="admin" element={<AdminPage />} />
      <Route path="view" element={<ViewPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
