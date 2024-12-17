import "./App.css";
import boarderLine from "./videos/BoarderLine.mp4";
import coupDeMainLocal from "./videos/CoupDeMainLocal.mp4";
import croustiEats from "./videos/CroustiEats.mp4";

function App() {
	return (
		<>
			<h1>PortFolio Amandine Grard-Laurent</h1>
			<div>
				<h2>
					Retrouvez tous les projets depuis le début de ma formation (septembre
					2024)
				</h2>

				<section>
					<div>
						<h2>Coup de main local</h2>
						<video width="90%" controls>
							<source src={coupDeMainLocal} type="video/mp4" />
						</video>
					</div>
				</section>
				<section>
					<div>
						<h2>Boarder Line</h2>
						<video width="90%" controls>
							<source src={boarderLine} type="video/mp4" />
						</video>
					</div>
				</section>

				<section>
					<div>
						<h2>Crousti Eats</h2>
						<video width="90%" controls>
							<source src={croustiEats} type="video/mp4" />
						</video>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
