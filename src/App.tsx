import "./App.css";
import CardVideo from "./components/cardVideo/CardVideo";
import cards from "./assets/data/data.json";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import cvPDF from "./assets/pdf/Amandine GRARD-LAURENT - CV.pdf";
import skill from "../src/assets/data/skills.json";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div className="container-page">
      <main>
        <Navbar />

        <div className="container">
          <section className="H1">
            <div className="typewriter-container">
              <div className="typewriter">
                <h1>Amandine Grard-Laurent</h1>
                <h2 className="title">DEVELOPPEUR WEB</h2>
              </div>
            </div>
          </section>

          <div className="container-profil">
            <section className="about-container">
              <div className="container-text-profil">
                <h2>A PROPOS</h2>
                <p className="text-profil">
                  Je viens de terminer ma formation de développeur web à la Wild
                  Code School, aboutissant au titre professionnel RNCP de
                  "Développeur Web et Web Mobile", équivalent Bac+2. Mon passage
                  du titre aura lieu au mois d'avril 2025. Afin d'étendre mes
                  connaissances et mes compétences, je souhaite poursuivre ma
                  formation en alternance. Je suis à la recherche d'un stage qui
                  pourra débuter le 21 avril afin d'aboutir à un contrat
                  d'alternance au mois de septembre pour la formation de
                  "Concepteur Développeur d'Applications". Je recherche dans la
                  région bordelaise/médoc. Le contrat d'alternance sera sur une
                  durée de 15 mois, au rythme d'une semaine de formation pour
                  trois semaines en entreprise, et il débutera en septembre
                  2025.
                </p>
                <p className="text-profil">
                  Organisée, autonome, créative et déterminée je sais m’adapter
                  rapidement et efficacement à mon environnement pour atteindre
                  mon objectif. La curiosité pour moi est un atout. L’esprit
                  d’équipe est essentiel.
                </p>{" "}
                <a
                  href={cvPDF}
                  target="_self"
                  rel="noopener noreferrer"
                  download
                >
                  <button type="button" className="button-cv">
                    Télécharger le CV
                  </button>
                </a>
              </div>
            </section>
            <section className="my_skills-container">
              <h2>SKILLS</h2>
              <ul>
                {skill.map((skill) => (
                  <Skill skill={skill} key={skill.alt} />
                ))}
              </ul>
            </section>
            <section className="my_projects-container">
              <h2>MES PROJETS</h2>
              <div className="container-video">
                {cards.map((card) => (
                  <CardVideo card={card} key={card.title} />
                ))}
              </div>
            </section>
            <section className="contact-container">
              <h2>CONTACT</h2>
              <div className="contact-list">
                <ul className="about-list">
                  <li>
                    <span>Nom</span> : Amandine Grard-Laurent
                  </li>
                  <li>
                    <span>Localisation</span> : Bordeaux (Parempuyre)
                  </li>
                  <li>
                    <span>Email</span> : a.grard.laurent08@gmail.com
                  </li>
                  <li>
                    <span>Tél</span> : 06 50 16 38 53
                  </li>
                  <li>
                    <span>GitHub</span> :{" "}
                    <a
                      href="https://github.com/AmandineGrardLaurent?tab=repositories"
                      className="link"
                    >
                      https://github.com/AmandineGrardLaurent?tab=repositories
                    </a>
                  </li>
                  <li>
                    <span>LinkedIn</span> :{" "}
                    <a
                      href="https://www.linkedin.com/in/amandine-grard-laurent-278440305/"
                      className="link"
                    >
                      https://www.linkedin.com/in/amandine-grard-laurent-278440305/
                    </a>
                  </li>
                  <li>
                    <a href="mailto:a.grard.laurent08@gmail.com">
                      <button type="button" className="button-mail">
                        Envoyez-moi un email : ici
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
