import "./App.css";
import boarderLine from "./videos/BoarderLine.mp4";
import coupDeMainLocal from "./videos/CoupDeMainLocal.mp4";
import croustiEats from "./videos/CroustiEats.mp4";

function App() {
	return (
		<main className="container">
			<h1>PortFolio Amandine Grard-Laurent</h1>
			<div className="card">
				<h2>
					Retrouvez tous les projets depuis le début de ma formation (septembre
					2024)
				</h2>

				<section className="container-video">
					<div className="card-video">
						<h3>Coup de main local</h3>
						<video width="90%" controls>
							<source src={coupDeMainLocal} type="video/mp4" />
						</video>
						<div className="container-text">
							<p>
								Le concept : Ce site est basé sur l'entraide au sein d'un
								quartier de Bordeaux. On a accès à une page qui liste les
								commerces, associations, services locaux..., ainsi on peut y
								retrouver les coordonnées et l'adresse via une page détaillée.{" "}
							</p>
							<p>
								Sur une seconde page on peut voir les annonces entre
								particuliers qui recensent les recherches de services, comme par
								exemple quelqu'un qui aurait besoin d'aide pour monter un meuble
								et qui propose en échange un service, un prêt d'objet ou encore
								un don d'objet. On peut également voir les personnes qui
								proposent directement un service. Là aussi on peut accéder à une
								page un détaillée.
							</p>
							<p>
								Je souhaite faire évoluer ce site afin que les utilisateurs
								puissent poster eux-même une annonce ou bien contacter
								l'adimistrateur via un formulaire pour poster une nouvelle
								annonce.
							</p>
						</div>
					</div>

					<div className="card-video">
						<h3>Boarder Line</h3>
						<video width="90%" controls>
							<source src={boarderLine} type="video/mp4" />
						</video>
						<p></p>
					</div>

					<div className="card-video">
						<h3>Crousti Eats</h3>
						<video width="90%" controls>
							<source src={croustiEats} type="video/mp4" />
						</video>
						<p></p>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
