import { NavLink } from "react-router-dom";

function Projects() {
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
              <li className="li-items">Info</li>
            </NavLink>
            <NavLink to="/snippet" activeClassName="active">
              <li className="li-items">Snippets</li>
            </NavLink>
          </ul>
        </div>
        <div className="project-right-content">
          <div className="right-title">My projects (design & develop)</div>
          <ul className="right-ul">
            <li className="right-li">
              <a href="#star-wars-project">Star Wars Project</a>
              <ul>
                <li className="right-sub-li">2023/Project</li>
              </ul>
            </li>
            <li className="right-li">
              <a href="https://github.com/Callumhayden99/react-cohort-dashboard-challenge">Dashboard Project</a>
              <ul>
                <li className="right-sub-li">2023/Project</li>
              </ul>
            </li>
            <li className="right-li">
              <a href="https://github.com/Callumhayden99/react-greengrocers">GreenGrocers Project</a>
              <ul>
                <li className="right-sub-li">2023/Project</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Projects;
