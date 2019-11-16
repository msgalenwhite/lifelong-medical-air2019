import React from "react";
import facebookIcon from "../static/icons/icon-facebook.svg";
import instagramIcon from "../static/icons/icon-instagram.svg";
import linkedInIcon from "../static/icons/icon-linkedIn.svg";
import twitterIcon from "../static/icons/icon-twitter.svg";
import youTubeIcon from "../static/icons/icon-youtube.svg";

const SocialIconBar = props => {
  const icons = [
    { icon: facebookIcon, label: "Facebook" },
    { icon: instagramIcon, label: "Instagram" },
    { icon: linkedInIcon, label: "LinkedIn" },
    { icon: twitterIcon, label: "Twitter" },
    { icon: youTubeIcon, label: "youTube" }
  ].map((iconInfo, index) => {
    return (
      <img
        src={iconInfo.icon}
        alt={iconInfo.label}
        key={`socialIcon_${index}`}
      />
    );
  });

  return <span className="socialIconBar">{icons}</span>;
};

export default SocialIconBar;
