import { NavLink } from "react-router-dom";
import dashboard1 from "../assets/dashboard1.jpg";
import green2 from "../assets/green2.jpg";
import star1 from "../assets/star1.jpg";


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
          <div className="snippet-info">Here's some snippets of my previous course work and individual projects that i've previously completed!</div>
          <div className="image-box">
            <img className="snippet-img" src={dashboard1} alt="Dashboard 1" />
            <div className="image-text-header">Cohort Manager project</div>
            <div className="image-text1">This was my first project that I completed with react by myself and also was apart of my course.<br></br>
             This is a talk forum where you can create new post's and go on individual post's.</div>
          </div>
          <div className="image-box">
            <img className="snippet-img" src={green2} alt="Dashboard 1" />
            <div className="image-text-header">Green Grocer's project</div>
            <div className="image-text2">This was my first time going from JS Dom to using react whilst completing my course.<br></br>
             This was just a shopping cart that you can add and take away items from,<br></br>
              with the total of the items being addded up.</div>
          </div>
          <div className="image-box">
            <img className="snippet-img" src={star1} alt="Dashboard 1" />
            <div className="image-text-header">Star wars project</div>
            <div className="image-text3">This project was my first personal project, this was created with HTML, CSS and REACT.JS.<br></br>
             This is a Stwar wars fan base platform, where you can see all the films, characters and planets.<br></br> 
             There's also a favourite section where you can add items to see for future reference.</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Snippet;
