import style from "./cardVIdeo.module.css";

type CardType = {
	title:string,
		video:string,
		concept: string,
		composition: string,
		evolution: string,
		vercel: string,
		github: string
}

export default function CardVideo({ card }: { card : CardType }) {
	return (
		<div className={style.cardVideo}>
			<h3>{card.title}</h3>
			<video width="90%" controls>
				<source src={card.video} type="video/mp4" />
			</video>
			<div className={style.containerText}>
				<p>
					<span>Le concept</span> : {card.concept}.
				</p>
				<p>
					<span>La composition</span> : {card.composition}
				</p>
				<p>
					<span>Son évolution</span> : {card.evolution}
				</p>

				<div className="link">
					<p>
						<span>Lien Github</span> : <a href={card.github}>{card.github}</a>
					</p>

					<p>
						<span>Lien Vercel</span> : <a href={card.vercel}>{card.vercel}</a>
					</p>
				</div>
			</div>
		</div>
	);
}
