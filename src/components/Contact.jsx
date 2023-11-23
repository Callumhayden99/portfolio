import { NavLink } from "react-router-dom";


function Contacts() {
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
        <div className="form-container">
          <h2 className="h2-contact">Contact form</h2>
          <form className="form">
            <label className="label">
              <input className="input" type="text" name="name" placeholder="First Name" />
            </label>
            <label className="label">
              <input className="input" type="text" name="name" placeholder="Last Name" />
            </label>
            <label className="label">
              <input className="input" type="email" name="email" placeholder="Email@" />
            </label>
            <label className="label">
              <input className="input" type="text" name="number" placeholder="+44" />
            </label>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contacts;
