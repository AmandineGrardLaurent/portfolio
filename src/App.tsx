import "./App.css";
import CardVideo from "./components/cardVideo/CardVideo";
import cards from "./assets/data/data.json";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import cvPDF from "./assets/pdf/Amandine GRARD-LAURENT - Curriculum Vitae.pdf";
import skillsFront from "../src/assets/data/skills-front.json";
import skillsBack from "../src/assets/data/skills-back.json";
import Skill from "./components/skill/Skill";
import profil from "./assets/image/photo_profil.jpg";

function App() {
  return (
    <div className="container-page">
      <main>
        <Navbar />

        <div className="container">
          <section className="banner">
            <img
              src={profil}
              alt="Amandine Grard-Laurent"
              className="profil-picture"
            />
            <div className="typewriter-container">
              <div className="typewriter">
                <h1>Amandine Grard-Laurent</h1>
                <h2 className="title">Développeur Web</h2>
              </div>
            </div>
          </section>

          <div className="container-profil">
            <section className="about-container">
              <div className="container-text-profil">
                <h2>A PROPOS</h2>
                <p className="text-profil">
                  Développeuse web passionnée, diplômée de la Wild Code School,
                  j’ai récemment passé le titre professionnel RNCP «
                  Développeuse Web et Web Mobile » (Bac+2) et j’attends les
                  résultats courant avril 2025. Forte d’expériences variées en
                  stage, notamment chez Leboncoin, Adista et IOAyoub, j’ai pu
                  consolider mes compétences en développement front-end (HTML,
                  CSS, JavaScript, React, Next.js) et back-end (Node.js,
                  Express.js, MySQL), ainsi qu’en gestion de projet Agile/Scrum.
                  <br />
                  <br />
                  Toujours curieuse d’apprendre et motivée par les nouveaux
                  défis, je souhaite poursuivre mon parcours en alternance pour
                  devenir Conceptrice Développeuse d’Applications à la rentrée
                  2025 (septembre/octobre, selon les écoles). Je suis disponible
                  dès le 21 avril pour un stage de pré-embauche dans la région
                  de Bordeaux ou du Médoc, avec l’objectif d’intégrer une équipe
                  dynamique et innovante.
                  <br />
                  <br />
                  Organisée, créative et déterminée, je m’investis pleinement
                  dans chaque projet, en mettant l’accent sur la qualité,
                  l’esprit d’équipe et la satisfaction utilisateur. Mon parcours
                  atypique, entre artisanat et web, m’a permis de développer une
                  grande capacité d’adaptation, une sensibilité créative et un
                  vrai goût pour la collaboration.
                </p>

                <button type="button" className="button">
                  <a
                    href={cvPDF}
                    target="_self"
                    rel="noopener noreferrer"
                    download
                  >
                    Télécharger le CV
                  </a>
                </button>
              </div>
            </section>
            <section className="my_skills-container">
              <h2>SKILLS</h2>
              <div>
                <h3>Front-End</h3>
                <ul>
                  {skillsFront.map((skill) => (
                    <Skill skill={skill} key={skill.alt} />
                  ))}
                </ul>
              </div>
              <div>
                <h3>Back-End</h3>
                <ul>
                  {skillsBack.map((skill) => (
                    <Skill skill={skill} key={skill.alt} />
                  ))}
                </ul>
              </div>
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

                  <button type="button" className="button-mail">
                    <a href="mailto:a.grard.laurent08@gmail.com">
                      Envoyez-moi un email : ici
                    </a>
                  </button>
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
