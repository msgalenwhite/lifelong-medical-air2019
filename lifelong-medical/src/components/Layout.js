import React from 'react'
import Footer from './Footer'
import HeaderNavBar from './HeaderNavBar'

import phoneIcon from '../static/icons/icon-phone.svg'

const Layout = props => {
  const phoneNumber = (
    <span className="headerText">
      <img src={phoneIcon} alt="phone number" />
      {"(510) 981 - 4100"}
    </span>
  )

  const primaryHeader = [
    {
      text: "Patient Portal",
      route:
        "https://www.lifelongmedical.org/contact-us-main/patient-portal.html",
    },
    {
      text: "Donate Now",
    },
    {
      text: "Language",
    },
  ].map((item, index) => {
    if (item.route !== null) {
      return (
        <a
          key={`primary_header_${index}`}
          className="headerText"
          href={item.route}
        >
          {item.text}
        </a>
      )
    } else {
      return (
        <span key={`primary_header_${index}`} className="headerText">
          {item.text}
        </span>
      )
    }
  })

  return (
    <div>
      <nav className="header">
        {phoneNumber}
        {primaryHeader}
      </nav>
      <HeaderNavBar />
      <div className="pageContent">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
