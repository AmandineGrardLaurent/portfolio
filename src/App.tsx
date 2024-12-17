import "./App.css";
import boarderLine from "./videos/BoarderLine.mp4";
import coupDeMainLocal from "./videos/CoupDeMainLocal.mp4";
import croustiEats from "./videos/CroustiEats.mp4";

function App() {
	return (
		<main className="container">
			<h1>PortFolio Amandine Grard-Laurent (EN COURS DE CONSTRUCTION)</h1>
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
								<span>Le concept</span> : Ce site est basé sur l'entraide en
								particulier au sein d'un quartier de Bordeaux.
							</p>
							<p>
								<span>La composition</span> : On a accès à une page qui liste
								les commerces, associations, services locaux..., ainsi on peut y
								retrouver les coordonnées et l'adresse via une page détaillée.
								Sur une seconde page on peut voir les annonces entre
								particuliers qui recensent les recherches de services, comme par
								exemple quelqu'un qui aurait besoin d'aide pour monter un meuble
								et qui propose en échange un service, un prêt d'objet ou encore
								un don d'objet. On peut également voir les personnes qui
								proposent directement un service. Là aussi on peut accéder à une
								page un détaillée. On a la possibilité de faire une recherche
								par catégorie sur les 2 pages, et une barre de recherche.
							</p>
							<p>
								<span>Son évolution</span> : Je souhaite faire évoluer ce site
								afin que les utilisateurs puissent poster eux-même une annonce
								ou bien contacter l'adimistrateur via un formulaire pour poster
								une nouvelle annonce. Je souhaiterais également étendre à
								plusieurs quartiers de Bordeaux.
							</p>

							<div className="link">
								Lien Github :{"  "}
								<a href="https://github.com/AmandineGrardLaurent/coup-de-main-local">
									https://github.com/AmandineGrardLaurent/coup-de-main-local
								</a>
							</div>
						</div>
					</div>

					<div className="card-video">
						<h3>Boarder Line</h3>
						<video width="90%" controls>
							<source src={boarderLine} type="video/mp4" />
						</video>
						<div className="container-text">
							<p>
								<span>Le concept</span> : Ce site recense différents jeux de
								société spécialisés. Vous pouvez consulter le descriptif
								détaillé de chaque jeux et les mettre dans vos favoris.
							</p>
							<p>
								<span>La composition</span> : Il y a une page d'accueil où vous
								retrouverez deux carrousels de jeux, un pour le top des jeux et
								un autre qui propose une selection de jeux à découvrir pour les
								personnes novices. Il y a également un page qui liste l'ensemble
								des jeux que vous pouvez filtrer. Enfin il y a une page pour
								afficher vos favoris et une page pour afficher le descriptif
								complet des jeux. Pour finir vous avez une barre de recherche
								pour rechercher un jeu.
							</p>
							<div className="link">
								Lien Vercel :{"  "}
								<a href="https://boarder-line-project.vercel.app/">
									https://boarder-line-project.vercel.app/
								</a>
							</div>{" "}
						</div>
					</div>

					<div className="card-video">
						<h3>Crousti Eats</h3>
						<video width="90%" controls>
							<source src={croustiEats} type="video/mp4" />
						</video>
						<div className="container-text">
							<p>
								<div className="link">
									Lien Github :{"  "}
									<a href="https://github.com/AmandineGrardLaurent/CroustiEats">
										https://github.com/AmandineGrardLaurent/CroustiEats
									</a>
								</div>
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
