import React, { useState } from "react";
import svg_logo from "../../images/hunteed-logo.svg";
import "./Navbar.css";
function Navbar() {
  const [lang, setLang] = useState("En");
  const [lanSelect, setLanSelect] = useState(false);
  const [navLink,setNavLink] = useState(false)
  const display_lang = () => {
    if (lang === "Fr") {
      return "FR";
    } else {
      return "EN";
    }
  };
  const handleEnSelect = () => {
    setLang("En");
  };
  const handleFrSelect = () => {
    setLang("Fr"  );
  };
  const handleSelectLang= ()=>{
      setLanSelect(!lanSelect);
      setNavLink(false);
  }
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-log">
          <img src={svg_logo} /> 
        </div>
        
        <div className={navLink? "nav-link-mobile":"nav-links"}>
          <a className="nav-link agency"> I am a recruting agency</a>
          <a className="nav-link hiring"> I am hiring</a>
          <a className="nav-link"> princing </a>
          <a className="nav-link" id="nav-link-login"> Login </a>
          
        </div>
        <i class="fas fa-bars" onClick={()=>{
            setNavLink(!navLink);
            setLanSelect(false);
         }}></i>
        <a className="lang-select-btn" onClick={handleSelectLang}>
            {display_lang()}  <i className="fas fa-angle-down"></i>
            <div className={lanSelect ? "lang-select-div active" : "lang-select-div"}>
              <ul>
                <li onClick={handleFrSelect}>
                  <a className="lang_btn" >
                    Français
                  </a>
                </li>
                <li onClick={handleEnSelect}>
                  <a className="lang_btn" >
                    English
                  </a>
                </li>
              </ul>
            </div>
          </a>
      </div>
    </div>
  );
}

export default Navbar;
