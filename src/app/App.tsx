import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { SEO } from "./components/SEO";
import { Home } from "./pages/Home";
import { Advertising } from "./pages/Advertising";
import { VideoEditing } from "./pages/VideoEditing";
import { WebpageBuilding } from "./pages/WebpageBuilding";
import { SocialMedia } from "./pages/SocialMedia";
import { StartProject } from "./pages/StartProject";
import { Privacy } from "./pages/Privacy";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <SEO />
        <div className="min-h-screen bg-slate-950">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/video-editing" element={<VideoEditing />} />
              <Route path="/webpage-building" element={<WebpageBuilding />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="/start-your-project" element={<StartProject />} />
              <Route path="/adatkezeles" element={<Privacy />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  </LanguageProvider>
  );
}