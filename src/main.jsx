import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.jsx";
import './styles/main.css'
import './styles/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RaceManagementPage from "./pages/RaceManagementPage.jsx";
import RaceDetailPage from "./pages/RaceDetailPage.jsx";
import Test from "./Test.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/races" element={<RaceManagementPage />} />
            <Route path="/races/:uid" element={<RaceDetailPage />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
