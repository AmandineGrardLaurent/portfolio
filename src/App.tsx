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
                  Bienvenue sur mon portfolio : ici, pas de discours formaté,
                  juste mes projets, mes compétences, et un aperçu de mon
                  univers. Si vous aimez les profils atypiques, les idées
                  originales et la bonne humeur avec un peu d'humour, on devrait
                  bien s’entendre !
                  <br />
                  <br />
                  Je m'appelle Amandine et je suis une développeuse web
                  passionnée et curieuse, j’ai troqué ma pince à bijoux pour un
                  clavier, après plusieurs années à façonner des créations
                  uniques en tant qu’artisan bijoutière joaillière. Diplômée de
                  la Wild Code School, j’ai récemment validé le titre
                  professionnel RNCP « Développeuse Web et Web Mobile » (Bac+2)
                  et je poursuis désormais mon aventure en alternance au CESI de
                  Bordeaux pour devenir Conceptrice Développeuse d’Applications.
                  je suis à la recherche d’une entreprise d’accueil pour une
                  alternance en tant que conceptrice développeuse
                  d'applications, à partir d’octobre, dans le cadre de ma
                  formation au CESI de Bordeaux. Celle-ci se déroule selon un
                  rythme d'une semaine à l’école et trois semaines en
                  entreprise.
                  <br />
                  <br />
                  Entre artisanat et développement web, j’ai appris à allier
                  créativité, rigueur et sens du détail — que ce soit pour polir
                  un bijou ou débuguer une application (et parfois, ça brille
                  dans les deux cas !). Pendant ma formation, j’ai travaillé sur
                  des projets front-end (HTML, CSS, JavaScript, React) et
                  back-end (Node.js, Express.js, MySQL), avec la méthode
                  Agile/Scrum. Mon stage chez IOAyoub m’a permis de découvrir
                  Next.js et Tailwind CSS, et de mettre les mains dans le code
                  sur des projets concrets.
                  <br />
                  <br />
                  Toujours partante pour relever de nouveaux défis, j’adore
                  explorer, apprendre, et apporter des solutions originales. Je
                  m’investis à 100 % dans chaque projet, avec une bonne dose de
                  bonne humeur, un esprit d’équipe solide, et l’envie de faire
                  plaisir à l’utilisateur. Mon objectif : rejoindre une équipe
                  dynamique et innovante, continuer à progresser, partager mon
                  enthousiasme et, qui sait, glisser une touche créative (et un
                  sourire) dans chaque ligne de code.
                  <br />
                  <br />
                  Au plaisir d’échanger et de construire ensemble de belles
                  solutions !
                  <br />
                  <br />
                  <blockquote>
                    Il n’y a point de génie sans un grain de folie…
                    <cite>Aristote</cite>
                  </blockquote>
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
                    {/* Identité */}
                    <svg
                      width="22"
                      height="22"
                      fill="#6a166a"
                      viewBox="0 0 16 16"
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5em",
                      }}
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                      <path d="M14 14s-1-1.5-6-1.5S2 14 2 14v1h12v-1z" />
                    </svg>
                    Amandine Grard-Laurent
                  </li>
                  <li>
                    {/* Localisation */}
                    <svg
                      width="22"
                      height="22"
                      fill="#6a166a"
                      viewBox="0 0 16 16"
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5em",
                      }}
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    Bordeaux (Parempuyre)
                  </li>
                  <li>
                    {/* Email */}
                    <svg
                      width="22"
                      height="22"
                      fill="#6a166a"
                      viewBox="0 0 16 16"
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5em",
                      }}
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 12.118V5.383zM14.247 13H1.753l4.708-4.71 1.039.623a.5.5 0 0 0 .5 0l1.039-.623L14.247 13zM1 12.118l4.708-4.71L1 5.383v6.735z" />
                    </svg>
                    a.grard.laurent08@gmail.com
                  </li>
                  <li>
                    {/* Téléphone */}
                    <svg
                      width="22"
                      height="22"
                      fill="#6a166a"
                      viewBox="0 0 24 24"
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5em",
                      }}
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 21 3 16.39 3 11.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
                    </svg>
                    06 50 16 38 53
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmandineGrardLaurent?tab=repositories"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5em",
                      }}
                    >
                      {/* GitHub */}
                      <svg
                        width="24"
                        height="24"
                        fill="#6a166a"
                        viewBox="0 0 16 16"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/amandine-grard-laurent-278440305/"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5em",
                      }}
                    >
                      {/* LinkedIn */}
                      <svg
                        width="24"
                        height="24"
                        fill="#6a166a"
                        viewBox="0 0 16 16"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                      LinkedIn
                    </a>
                  </li>

                  <button type="button">
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
