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
              <li className="li-items">About me</li>
            </NavLink>
            <NavLink to="/snippet" activeClassName="active">
              <li className="li-items">Snippets</li>
            </NavLink>
          </ul>
        </div>
        <div className="contact-section">
        <div className="welcome-contact">Please feel free to contact me if you have any questions.</div>
        <div className="form-icons">
        <img
              src="https://www.shareicon.net/data/512x512/2017/06/30/888065_logo_512x512.png"
              width={55}
              alt="LinkedIn"
            />
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png"
              width={50}
              alt="Gmail"
            />
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
      </div>
    </>
  );
}
export default Contacts;
