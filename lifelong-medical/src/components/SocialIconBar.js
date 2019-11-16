import React from "react";
import facebookIcon from "../static/icons/icon-facebook.svg";
import instagramIcon from "../static/icons/icon-instagram.svg";
import linkedInIcon from "../static/icons/icon-linkedIn.svg";
import twitterIcon from "../static/icons/icon-twitter.svg";
import youTubeIcon from "../static/icons/icon-youtube.svg";
import { useStaticQuery, graphql } from "gatsby";

const SocialIconBar = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaData {
      lifeLongWordPress {
        pages {
          edges {
            node {
              social_media {
                facebook
                fieldGroupName
                instagram
                linkedin
                twitter
                youtube
              }
            }
          }
        }
      }
    }
  `);

  const socialLinks = data.lifeLongWordPress.pages.edges[0].node.social_media;

  const icons = [
    { icon: facebookIcon, label: "Facebook" },
    { icon: instagramIcon, label: "Instagram" },
    { icon: linkedInIcon, label: "LinkedIn" },
    { icon: twitterIcon, label: "Twitter" },
    { icon: youTubeIcon, label: "youTube" }
  ].map((iconInfo, index) => {
    const linkDestination = socialLinks[iconInfo.label.toLowerCase()];

    return (
      <a
        href={linkDestination}
        key={`socialIcon_${index}`}
        alt={`Visit LifeLong Medical on ${iconInfo.label}`}
      >
        <img src={iconInfo.icon} alt={iconInfo.label} />
      </a>
    );
  });

  return <span className="socialIconBar">{icons}</span>;
};

export default SocialIconBar;
