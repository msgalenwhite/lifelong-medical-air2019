const React = require("react")
const fb = require("../static/icons/icon-facebook.svg")
const insta = require("../static/icons/icon-instagram.svg")
const linkedIn = require("../static/icons/icon-linkedIn.svg")
const twitter = require("../static/icons/icon-twitter.svg")
const youTube = require("../static/icons/icon-youtube.svg")

const SocialIconBar = props => {
  const icons = [
    { icon: fb, label: "Facebook" },
    { icon: insta, label: "Instagram" },
    { icon: linkedIn, label: "LinkedIn" },
    { icon: twitter, label: "Twitter" },
    { icon: youTube, label: "youTube" },
  ].map((iconInfo, index) => {
    return (
      <img
        src={iconInfo.icon}
        alt={iconInfo.label}
        key={`socialIcon_${index}`}
      />
    )
  })

  return <span className="socialIconBar">{icons}</span>
}
module.exports = SocialIconBar
