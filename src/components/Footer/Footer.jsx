import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Copyright © 2022-24.<br /> All Rights Reserved by Imran Hossen</span> 
        <div className="f-icons">
          <a target='blank' href="https://www.instagram.com/imran_hossen81/"><Insta color="white" size={"3rem"} /></a>
          <a target='blank' href="https://www.facebook.com/ImRanKhan81m"><Facebook color="white" size={"3rem"} /></a>
          <a target='blank' href="https://github.com/ImRanKhan81m"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
