import style from "./navbar.module.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbarList}>
        <li>
          <Link
            to="about-container
					"
            smooth={true}
            duration={600}
            offset={-50}
          >
            A PROPOS
          </Link>{" "}
        </li>
        <li>
          <Link
            to="my_skills-container"
            smooth={true}
            duration={600}
            offset={-50}
          >
            SKILLS
          </Link>{" "}
        </li>
        <li>
          <Link
            to="my_projects-container"
            smooth={true}
            duration={600}
            offset={-50}
          >
            PROJETS
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="contact-container"
            smooth={true}
            duration={600}
            offset={-50}
          >
            CONTACT
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
