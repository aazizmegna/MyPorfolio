import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <h1>
            <a href="/">
              <span className="icons">
                <FontAwesomeIcon icon={faDev} />
              </span>{" "}
              <span> Abdel Aziz KAMO MEGNA</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdel-aziz-kamo-megna-1293b1167/"
            target="_blank"
            className="icons"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aazizmegna"
            target="_blank"
            className="icons"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.dropbox.com/s/h7td7p0l2sdhkaq/CV%20-%20Abdel%20Aziz%20Kamo.pdf?dl=0"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
