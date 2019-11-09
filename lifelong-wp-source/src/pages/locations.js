import React from "react"
const Layout = require("../components/Layout.js")
const Locations = props => {
  // list in order of county

  const locations = [
    {
      name: "Location Name",
      address: "Insert Address",
    },
    {
      name: "Location Name",
      address: "Insert Address",
    },
    {
      name: "Location Name",
      address: "Insert Address",
    },
    {
      name: "Location Name",
      address: "Insert Address",
    },
    {
      name: "Location Name",
      address: "Insert Address",
    },
  ].map((locationInfo, index) => {
    return (
      <div key={`location_${index}`}>
        <h3>{locationInfo.name}</h3>
        <div>{locationInfo.address}</div>
      </div>
    )
  })

  return (
    <Layout>
      <h1 className="centerText">Our Locations</h1>
      <div className="centerBlock">{locations}</div>
      <div className="center">
        <a
          href="https://www.google.com/maps/search/lifelong/@37.8445667,-122.4080733,11z/data=!4m2!2m1!6e2"
          alt="Find a location closest to you."
        >
          <button className="blueButton">Find Your Closest Location</button>
        </a>
      </div>
    </Layout>
  )
}

export default Locations
