import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const handleCheckChange = () => {
    let newTheme;
    if (theme === "dark") {
      newTheme = "light";
    } else {
      newTheme = "dark";
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleButtonClick = () => {
    localStorage.removeItem("theme");
    setTheme("light");
  };

  return (
    <>
      <div className="home-container">
        <div className="back-border">
          <div className="title">
            <h1 className="h1">Callum Hayden</h1>
            <h3 className="h3">Software Web Developer</h3>
          </div>
          <div className="Left-menu">
            <ul className="ul">
              <NavLink to="/" activeClassName="active">
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
              <div className="dark-mode-container">
              <label htmlFor="darkMode">Dark Mode</label>
                <input
                  id="darkMode"
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={handleCheckChange}
                ></input>
              </div>
              <div>
                <button
                  className="dark-mode-btn"
                  onClick={handleButtonClick}
                >Reset
                </button>
              </div>
            </ul>
          </div>
          <div className="right-menu">
            <h3>Welcome,</h3>
            As a web developer,<br></br> I bring a strong blend <br></br>of
            technical expertise <br></br>and creativity,<br></br>enabling me to
            develop<br></br> innovative and <br></br>user-friendly websites
            <br></br> and applications.<br></br> My proficiency in front-end
            <br></br>technologies, coupled with<br></br> my problem-solving
            skills
            <br></br>and commitment to <br></br>staying abreast of the <br></br>
            latest industry trends,<br></br> allows me to deliver solutions
            <br></br>
            that not only meet but<br></br> often exceed client<br></br>
            expectations.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
