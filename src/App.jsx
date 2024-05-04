import AdminPage from "./components/Admin/AdminPage";
import NotFoundPage from "./components/NotFound";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Common/NavBar/NavBar'
import Footer from './components/Common/Footer/Footer'
import { RequireAuth } from "./components/RequireAuth";
import AboutPage from "./components/About/AboutPage";
import SimulationLab from "./components/Lab/SimulationLab/SimulationLab";
import CommunicationLab from "./components/Lab/Communication/CommunicationLab";
import ElectronicsLab from "./components/Lab/Electronics/ElectronicsLab";
import ResearchPage from "./components/Research/ResearchPage";
import ContactPage from "./components/Contact/ContactPage";
import AcademicPage from "./components/Academic/AcademicPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin" element={
          <RequireAuth>
            <AdminPage />
          </RequireAuth>} />
        <Route path="academic" element={<AcademicPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="simulation" element={<SimulationLab />} />
        <Route path="communication" element={<CommunicationLab />} />
        <Route path="electronics" element={<ElectronicsLab />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>

  );
}
