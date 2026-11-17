import { Link, useParams } from "react-router-dom";
import {
  detailSections,
  formationsEntreprise,
  unavailableInformation,
} from "./formationEntrepriseData";
import "./formationEntreprise.css";

function FormationEntrepriseDetail() {
  const { slug } = useParams();
  const formation = formationsEntreprise.find((item) => item.id === slug);

  if (!formation) {
    return (
      <main className="enterprise-training enterprise-training--detail">
        <section className="enterprise-training__detail">
          <p className="enterprise-training__eyebrow">MICC · Formation</p>
          <h1>Formation introuvable</h1>
          <Link className="enterprise-training__back" to="/services">
            Retour aux formations
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="enterprise-training enterprise-training--detail">
      <section className="enterprise-training__detail">
        <Link className="enterprise-training__back" to="/services">
          ← Toutes les formations
        </Link>
        <p className="enterprise-training__eyebrow">
          Formation {formation.number}
        </p>
        <h1>{formation.title}</h1>
        <p className="enterprise-training__detail-notice">
          Les informations détaillées sur le programme de cette formation
          seront bientôt disponibles.
        </p>

        <div className="enterprise-training__sections">
          {detailSections.map((section) => (
            <section
              className="enterprise-training__detail-section"
              key={section}
            >
              <h2>{section}</h2>
              <p>{unavailableInformation}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FormationEntrepriseDetail;
