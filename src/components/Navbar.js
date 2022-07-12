import { Link } from "react-router-dom";
import "./Navbar.css";
import GithubIcon from "../images/GitHub.png";
import EmailIcon from "../images/emailicon.png";

const Navbar = (props) => {
  return (
    <header>
      <div className="logo">
        Steven <span>Mudie</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <a href="https://github.com/StevenMudie">
            <img src={GithubIcon} alt="Github" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={EmailIcon} alt="Email" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
