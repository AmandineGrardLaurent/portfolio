import style from "./navbar.module.css";
import avatar from "../../assets/image/photo_profil.jpg";

export default function Navbar() {
	return (
		<nav className={style.navbar}>
			<img
				src={avatar}
				alt="Amandine Grard-Laurent"
				className={style.profilImg}
			/>
			<ul>
				<li>A PROPOS</li>
				<li>SKILLS</li>
				<li>PROJETS</li>
				<li>CONTACT</li>
			</ul>
		</nav>
	);
}
