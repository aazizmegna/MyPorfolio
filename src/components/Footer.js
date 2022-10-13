import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Abdel Aziz KAMO MEGA &middot; Developer</h2>
      <div className="icons">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/abdel-aziz-kamo-megna-1293b1167/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/aazizmegna" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
        </ul>
      </div>
      <p>
        <small>&copy; 2021 Abdel Aziz KAMO MEGNA. All rights reserved.</small>
      </p>
    </div>
  );
};
export default Footer;
