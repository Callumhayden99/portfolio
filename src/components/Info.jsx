import { NavLink } from "react-router-dom";


function Info() {
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
          <div className="icons-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
              width={50}
              alt="JavaScript"
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              width={50}
              alt="HTML"
            />
            <img
              src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
              width={50}
              alt="CSS"
            />
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
              width={50}
              alt="React"
            />
            <img src="https://www.svgrepo.com/show/303535/visual-studio-code-logo.svg" 
             width={50}
              alt="VSCode" />
          </div>
          <h1 className="info-title">Here's a little information about myself</h1>
          <p>
            {" "}
            Embarking on a Journey in Front-End Excellence: Greetings, I am
            Callum Hayden—your dedicated architect in the web development arena,
            expertly wielding the tools of HTML, CSS, and React.js with
            precision. With a discerning eye for aesthetics and user engagement,
            my designs are not only visually striking but meticulously crafted
            for optimal user experience. My crusade is simple, to elevate code
            into captivating online narratives that engage and inspire. My
            foundation in HTML, CSS and React.js ensures that responsiveness and
            accessibility are at the heart of every project I undertake.
            React.js is my canvas for crafting interactive, robust user
            interfaces that delight and perform. Professionalism is my
            signature—commitment, my constant companion. I am often the first to
            arrive and the last to depart, a testament to my dedication to the
            craft. For me, this is more than a career—it's a lifelong pursuit of
            innovation and excellence. I'm Callum, poised to leave an indelible
            imprint on the front-end landscape. 
          </p>
        </div>
    </>
  );
}
export default Info;
