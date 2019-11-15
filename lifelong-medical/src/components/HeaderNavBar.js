import React from 'react'

import logo from '../static/logo.jpg'

import {Link} from 'gatsby'

const HeaderBar = props => {
  const secondaryHeader = [
    {
      text: "Home",
      route: "/",
      gatsby: true,
    },
    {
      text: "Our Services",
      route: "/services",
      gatsby: true,
    },
    {
      // ideally, this would open in an iphrame, but Google maps
      // charges to get an API key
      text: "Find a Location",
      route: "/locations",
      gatsby: true,
    },
    {
      text: "Become a Patient",
      route: "/new_patient",
      gatsby: true,
    },
    {
      text: "Work with Us",
      route: "/community_partners",
      gatsby: true,
    },
    {
      text: "Contact Us",
      route: "/contact",
      gatsby: true,
    },
  ].map((item, index) => {
    if (item.route !== null) {
      return item.gatsby ? (
        <Link
          to={item.route}
          className="secondaryHeaderText"
          activeClassName="secondaryActive"
          partiallyActive={item.text !== "Our Services"}
          replace
          key={`secondary_header_${index}`}
        >
          {item.text}
        </Link>
      ) : (
        <a
          href={item.route}
          alt={`Exernal link to ${item.text}`}
          className="secondaryHeaderText"
          key={`secondary_header_${index}`}
        >
          {item.text}
        </a>
      )
    } else {
      return (
        <span key={`secondary_header_${index}`} className="secondaryHeaderText">
          {item.text}
        </span>
      )
    }
  })
  return (
    <div>
      {
        // <div className="headerImage">
        //       <img src={image} alt="Faces of healthy children" height="200" />
        //     </div>
      }
      <div className="logoNavBar">
        <img className="logo" src={logo} alt="Lifelong Medical Logo" />
        <nav className="secondaryHeader">{secondaryHeader}</nav>
      </div>
    </div>
  )
}

export default HeaderBar
