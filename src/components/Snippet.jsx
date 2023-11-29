import { NavLink } from "react-router-dom";
import dashboard1 from "../assets/dashboard1.jpg";
import dashboard2 from "../assets/dashboard2.jpg";
import green1 from "../assets/green1.jpg";
import green2 from "../assets/green2.jpg";
import star1 from "../assets/star1.jpg";
import star2 from "../assets/star2.jpg";

function Snippet() {
  return (
    <>
      <div className="back-border">
        <div className="title">
          <h1 className="h1">Callum Hayden</h1>
          <h3 className="h3">Software Web Developer</h3>
        </div>
        <div className="Left-menu">
          <ul className="ul">
            <NavLink to="/home" activeClassName="active">
              <li className="li-items">Home</li>
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
              <li className="li-items">Projects</li>
            </NavLink>
            <NavLink to="/contacts" activeClassName="active">
              <li className="li-items">Contact</li>
            </NavLink>
            <NavLink to="/info" activeClassName="active">
              <li className="li-items">About me</li>
            </NavLink>
            <NavLink to="/snippet" activeClassName="active">
              <li className="li-items">Snippets</li>
            </NavLink>
          </ul>
        </div>
        <div className="img-container">
          <div className="snippet-info">Here's some snippets of my previous course work and indivdual projects that i've previously completed!</div>
          <div className="image-box">
            <img className="snippet-img" src={dashboard1} alt="Dashboard 1" />
            <div className="image-text">Dashboard 1</div>
          </div>
          <div className="image-box">
            <img className="snippet-img" src={green2} alt="Dashboard 1" />
            <div className="image-text">Dashboard 1</div>
          </div>
          <div className="image-box">
            <img className="snippet-img" src={star1} alt="Dashboard 1" />
            <div className="image-text">Dashboard 1</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Snippet;
