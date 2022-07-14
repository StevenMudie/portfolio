import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Navbar.css";
import GithubIcon from "../images/GitHub.png";
import EmailIcon from "../images/emailicon.png";
import "../styles/burgerMenu.css";

const Navbar = (props) => {
  return (
    <header>
      <div className="container">
        <div className="wrap">
          <Menu>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </Menu>
          <div className="logo">
            Steven <span>Mudie</span>
          </div>
        </div>
        <nav className="mainLinks">
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
            <a
              href="https://github.com/StevenMudie"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={GithubIcon} alt="Github" />
            </a>
          </li>
          <li>
            <a href="mailto:stevenmudie@icloud.com">
              <img src={EmailIcon} alt="Email" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
