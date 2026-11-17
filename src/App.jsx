
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";

import Services from "./Pages/Services";
import FormationEntrepriseDetail from "./Pages/FormationEntrepriseDetail";
import Partners from "./Pages/Partners";

function PageUnavailable({ title }) {
  return (
    <main className="enterprise-training enterprise-training--detail">
      <section className="enterprise-training__detail">
        <p className="enterprise-training__eyebrow">MICC</p>
        <h1>{title}</h1>
        <p className="enterprise-training__detail-notice">
          Cette page n’est pas encore disponible.
        </p>
        <Link className="enterprise-training__back" to="/services">
          Découvrir les formations disponibles
        </Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/services" replace />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:slug"
          element={<FormationEntrepriseDetail />}
        />
        <Route path="/partenaires" element={<Partners />} />
        <Route
          path="/about"
          element={<PageUnavailable title="Qui sommes-nous ?" />}
        />
        <Route
          path="/senior"
          element={<PageUnavailable title="Formation senior" />}
        />
        <Route
          path="/training"
          element={<PageUnavailable title="Formation professionnelle" />}
        />
        <Route
          path="/contact"
          element={<PageUnavailable title="Contact" />}
        />
        <Route
          path="*"
          element={<PageUnavailable title="Page introuvable" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
