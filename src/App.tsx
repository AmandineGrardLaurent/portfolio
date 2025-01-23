import "./App.css";
import CardVideo from "./components/cardVideo/CardVideo";
import cards from "./assets/data/data.json";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import cvPDF from "./assets/pdf/cvAmandineGrardLaurent.pdf";
import skill from "../src/assets/data/skills.json";
import Skill from "./components/skill/Skill";

function App() {
	return (
		<div className="container-page">
			<main>
				<Navbar />

				<div className="container">
					<section>
						<div className="typewriter-container">
							<div className="typewriter">
								<h1>Amandine Grard-Laurent</h1>
								<h2 className="title">DEVELOPPEUR WEB</h2>
							</div>
						</div>
					</section>

					<div className="container-profil">
						<section className="about-container">
							<h2>A PROPOS</h2>
							<div>
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
										<a href="https://github.com/AmandineGrardLaurent?tab=repositories">
											https://github.com/AmandineGrardLaurent?tab=repositories
										</a>
									</li>
									<li>
										<span>LinkedIn</span> :{" "}
										<a href="https://www.linkedin.com/in/amandine-grard-laurent-278440305/">
											https://www.linkedin.com/in/amandine-grard-laurent-278440305/
										</a>
									</li>
									<li className="text-profil">
										Je suis actuellement en formation à la Wild Code School pour
										devenir développeur web. Afin d'étendre mes connaissances et
										mes compétences, je souhaite poursuivre ma formation en
										alternance. Je suis à la recherche d'un contrat d'alternance
										dans la région bordelaise pour une durée de 15 mois, au
										rythme d'une semaine de formation pour trois semaines en
										entreprise. Ce contrat débuterait au mois de mars 2025.
									</li>

									<li className="text-profil">
										Organisée, autonome, créative et déterminée je sais
										m’adapter rapidement et efficacement à mon environnement
										pour atteindre mon objectif. La curiosité pour moi est un
										atout. L’esprit d’équipe est essentiel.
									</li>
								</ul>
							</div>
							<a href={cvPDF} target="_self" rel="noopener noreferrer" download>
								<button type="button">Télécharger le CV</button>
							</a>
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
							<ul className="contact-list">
								<li>Email : a.grard.laurent08@gmail.com</li>
								<li>Tél : 06 50 16 38 53</li>
								<li>
									<a href="mailto:a.grard.laurent08@gmail.com">
										<button type="button" className="button-mail">
											Envoyez-moi un email : ici
										</button>
									</a>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
