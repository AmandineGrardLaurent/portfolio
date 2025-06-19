import { CardType } from "../../lib/definitions";
import style from "./cardVIdeo.module.css";

export default function CardVideo({ card }: { card: CardType }) {
  return (
    <div className={style.cardVideo}>
      <h3>{card.title}</h3>
      {card.video !== "" && (
        <video width="90%" controls>
          <source src={card.video} type="video/mp4" />
          <track
            kind="captions"
            src="captions.vtt"
            srcLang="fr"
            label="Français"
          />
        </video>
      )}
      <div className={style.containerText}>
        {card.concept && (
          <p className={style.description}>
            <span>Le concept</span> : {card.concept}.
          </p>
        )}
        {card.evolution && (
          <p className={style.description}>
            <span>Son évolution</span> : {card.evolution}
          </p>
        )}

        <div>
          <p>
            <span>Lien Github</span> :{" "}
            <a href={card.github} className="link">
              {card.github}
            </a>
          </p>
          {card.vercel && (
            <p>
              <span>Lien Vercel</span> :{" "}
              <a href={card.vercel} className="link">
                {card.vercel}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
