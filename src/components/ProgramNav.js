import { Link } from "react-scroll";
export default function ProgramNav() {
  return (
    <nav id="program-nav">
      <ul id="program-nav-container">
        <div className="nav-div"></div>
        <li>
          {/*  <a id="pro-nav-mon" href="#monday-section">
            Monday
          </a> */}
          {/* <Link to="/program#monday-section">Monday</Link> */}
          <Link
            to="monday-section"
            id="pro-nav-mon"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Monday
          </Link>
        </li>
        <div className="nav-div"></div>
        <li>
          {" "}
          <Link
            to="tuesday-section"
            id="pro-nav-tue"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Tuesday
          </Link>
        </li>
        <div className="nav-div"></div>
        <li>
          {" "}
          <Link
            to="wednesday-section"
            id="pro-nav-wed"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Wednesday
          </Link>
        </li>
        <div className="nav-div"></div>
        <li>
          <Link
            to="thursday-section"
            id="pro-nav-thu"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Thursday
          </Link>
        </li>
        <div className="nav-div"></div>
        <li>
          <Link
            to="friday-section"
            id="pro-nav-fri"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Friday
          </Link>
        </li>
        <div className="nav-div"></div>
        <li>
          <Link
            to="saturday-section"
            id="pro-nav-sat"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Saturday
          </Link>
        </li>
        <div className="nav-div"></div>
        <li>
          <Link
            to="sunday-section"
            id="pro-nav-sun"
            className="pro-nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sunday
          </Link>
        </li>
        <div className="nav-div"></div>
      </ul>
    </nav>
  );
}
