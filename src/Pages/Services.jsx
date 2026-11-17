import { Link } from "react-router-dom";
import { formationsEntreprise } from "./formationEntrepriseData";
import "./formationEntreprise.css";

function Services() {
  return (
    <main className="enterprise-training">
      <section className="enterprise-training__intro">
        <p className="enterprise-training__eyebrow">MICC · Formation</p>
        <h1>Formation Entreprise</h1>
        <p>
          Découvrez notre catalogue de formations dédiées aux entreprises.
        </p>
      </section>

      <section
        className="enterprise-training__catalog"
        aria-label="Catalogue des formations entreprise"
      >
        <div className="enterprise-training__grid">
          {formationsEntreprise.map((formation) => (
            <article
              className="enterprise-training__card"
              key={formation.id}
            >
              <span className="enterprise-training__number">
                Formation {formation.number}
              </span>
              <h2>{formation.title}</h2>
              <p>{formation.description}</p>
              <Link
                className="enterprise-training__button"
                to={`/services/${formation.id}`}
                aria-label={`Voir les détails de la formation ${formation.number}`}
              >
                Voir les détails
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
