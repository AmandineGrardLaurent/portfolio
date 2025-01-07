import "./App.css";
import CardVideo from "./components/cardVideo/CardVideo";
import cards from "./assets/data/data.json";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import cvPDF from "./assets/pdf/Amandine GRARD-LAURENT.pdf";

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
									<p className="text-profil">
										Je suis actuellement en formation à la Wild Code School pour
										devenir développeur web. Afin d'étendre mes connaissances et
										mes compétences, je souhaite poursuivre ma formation en
										alternance. Je suis à la recherche d'un contrat d'alternance
										dans la région bordelaise pour une durée de 15 mois, au
										rythme d'une semaine de formation pour trois semaines en
										entreprise. Ce contrat débuterait au mois de mars 2025.
									</p>
									<li>Nom : Amandine Grard-Laurent</li>
									<li>Localisation : Bordeaux (Parempuyre)</li>
									<li>Email : a.grard.laurent08@gmail.com</li>
									<li>Tél : 06 50 16 38 53</li>
								</ul>
							</div>
							<a href={cvPDF} target="_self" rel="noopener noreferrer" download>
								<button type="button">Télécharger le CV</button>
							</a>
						</section>
						<section className="my_skills-container">
							<h2>SKILLS</h2>
							<ul>
								<li>
									<img
										src={
											"https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"
										}
										alt="logo typescript"
										width="60"
									/>
								</li>
								<li>
									<img
										src={
											"https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor"
										}
										alt="logo css 3"
										width="60"
									/>
								</li>
								<li>
									<img
										src={
											"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
										}
										alt="logo javascript"
										width="60"
									/>
								</li>
								<li>
									<img
										src={
											"https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor"
										}
										alt="logo react"
										width="60"
									/>
								</li>{" "}
								<li>
									<img
										src={
											"https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor"
										}
										alt="logo html5"
										width="60"
									/>
								</li>
								<li>
									<img
										src={
											"https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=currentColor"
										}
										alt="logo express"
										width="60"
									/>
								</li>
								<li>
									<img
										src={
											"https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor"
										}
										alt="logo node js"
										width="60"
									/>
								</li>
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
							{/* <form>
								<input type="email" placeholder="Votre email" />
								<input type="text" placeholder="Votre nom" />

								<textarea placeholder="Votre message" />
								<button type="button">Contactez-moi</button>
							</form> */}
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
