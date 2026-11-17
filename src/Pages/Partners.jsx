import { ImageOff } from "lucide-react";
import "./partners.css";

const partners = [
  {
    name: "Ciments du Maroc",
    image: "/images/partners/ciments-du-maroc-jorf-lasfar.jpg",
    imageAlt: "Site industriel de Jorf Lasfar de Ciments du Maroc",
    caption: "Site industriel de Jorf Lasfar",
    source: "https://www.cimentsdumaroc.com/fr/nos-implantations",
    sourceLabel: "Source photographique",
  },
  {
    name: "FITCO Casablanca",
    image: "/images/partners/fitco-casablanca.jpg",
    imageAlt: "Photographie de FITCO Casablanca fournie par MICC",
    caption: "Photographie fournie par MICC",
    source:
      "https://www.telecontact.ma/annonceur/fitco/3025770/casablanca.php",
    sourceLabel: "Consulter la fiche FITCO",
  },
  {
    name: "SONASID",
    image: "/images/partners/sonasid-site-industriel.jpg",
    imageAlt: "Site industriel de Sonasid à Nador",
    caption: "Site industriel de Nador",
    source: "https://www.sonasid.ma/fr/mediatheque",
    sourceLabel: "Source photographique",
  },
  {
    name: "SMM SOCODAM DAVUM",
    image: "/images/partners/smm-socodam-davum-produit.jpg",
    imageAlt: "Produit en béton portant le marquage SMM Socodam Davum",
    caption: "Photographie d’un produit SMM Socodam Davum",
    source: "https://www.ssd.ma/",
    sourceLabel: "Source photographique",
    imageClassName: "partners-card__image--smm",
  },
];

function Partners() {
  return (
    <main className="partners-page">
      <section className="partners-section" id="partenaires">
        <div className="partners-intro">
          <p className="partners-eyebrow">MICC · Nos partenaires</p>
          <h1>Des partenariats solides</h1>
          <p>
            Nous sommes fiers de collaborer avec des entreprises de référence.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <article className="partners-card" key={partner.name}>
              <div
                className={`partners-card__media ${
                  partner.imageClassName ?? ""
                }`}
              >
                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={partner.imageAlt}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="partners-card__placeholder"
                    role="img"
                    aria-label="Photographie authentique non disponible"
                  >
                    <ImageOff size={28} aria-hidden="true" />
                    <span>Photographie à fournir</span>
                  </div>
                )}
              </div>

              <div className="partners-card__content">
                <h2>{partner.name}</h2>
                <p>{partner.caption}</p>
                <a
                  href={partner.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {partner.sourceLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Partners;
