import AdminPage from "./components/AdminPage";
import NotFoundPage from "./components/NotFound";
import HomePage from "./components/HomePage";
import ViewPage from "./components/ViewPage";
import Login from "./components/Login"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { RequireAuth } from "./components/RequireAuth";
import AboutPage from "./components/AboutPage";
import SimulationLab from "./components/Lab/SimulationLab";
import CommunicationLab from "./components/Lab/CommunicationLab";
import ElectronicsLab from "./components/Lab/ElectronicsLab";
import ResearchPage from "./components/ResearchPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <div>  
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="admin" element={
          <RequireAuth>
            <AdminPage />
          </RequireAuth>} />
        <Route path="view" element={<ViewPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="simulation" element={<SimulationLab />} />
        <Route path="communication" element={<CommunicationLab />} />
        <Route path="electronics" element={<ElectronicsLab />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>

  );
}
