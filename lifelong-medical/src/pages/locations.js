import React from "react";
import GoogleMap from "../components/GoogleMap.js";
import Layout from "../components/Layout.js";
const { Link } = require("gatsby");

/* information needed for a location:
- name
- address
- latitude
- longitude
- services available (currently just "emergencyServices") - TODO
    {health: boolean, dental: boolean, behavioral: boolean, enrollment: boolean}
- hours - TODO
    {Mon: string, Tues: string, Wed: string, Thurs: string, Fri: string, Sat: string, Sun: string, note: string}
    // the note is for things like  "Closed 12:30 - 2 daily for lunch" https://www.lifelongmedical.org/locations/our-locations/lenoir-health-center.html
- list of specific services available - TODO
- payment options - TODO
- 2 paragraphs of information (can take from current site)
*/

const Locations = props => {
  const locations = [
    {
      name: "LifeLong West Berkeley Health Center",
      address: "837 Addison St, Berkeley, CA 94710",
      lat: "37.8445667",
      long: "-122.4080733",
      emergencyServices: false
    },
    {
      name: "LifeLong Medical Care: Administrative Offices",
      address: "2344 Sixth St, Berkeley, CA 94710",
      lat: "37.8445667",
      long: "-122.4080733",
      emergencyServices: true
    },
    {
      name: "LifeLong East Oakland Health Center",
      address: "Foothill Square, 10700 MacArthur Blvd, Oakland, CA 94605",
      lat: "37.8445667",
      long: "-122.4080739",
      emergencyServices: false
    },
    {
      name: "LifeLong West Berkeley Health Center2",
      address: "837 Addison St, Berkeley, CA 94710",
      lat: "37.8445667",
      long: "-122.5080433",
      emergencyServices: true
    },
    {
      name: "LifeLong Medical Care: Administrative Offices2",
      address: "2344 Sixth St, Berkeley, CA 94710",
      lat: "38.8445667",
      long: "-130.3090733",
      emergencyServices: true
    },
    {
      name: "LifeLong East Oakland Health Center2",
      address: "Foothill Square, 10700 MacArthur Blvd, Oakland, CA 94605",
      lat: "37.8445667",
      long: "-125.4080733",
      emergencyServices: false
    },
    {
      name: "LifeLong West Berkeley Health Center22",
      address: "837 Addison St, Berkeley, CA 94710",
      lat: "37.8445667",
      long: "-122.4080733",
      emergencyServices: false
    },
    {
      name: "LifeLong Medical Care: Administrative Offices22",
      address: "2344 Sixth St, Berkeley, CA 94710",
      lat: "37.8445667",
      long: "-122.4080733",
      emergencyServices: true
    },
    {
      name: "LifeLong East Oakland Health Center22",
      address: "Foothill Square, 10700 MacArthur Blvd, Oakland, CA 94605",
      lat: "37.8445667",
      long: "-122.4080733",
      emergencyServices: false
    }
  ];

  const locationList = locations.map((locationInfo, index) => {
    const emergencyServicesAlert = locationInfo.emergencyServices ? (
      <div>Emergency services are available here.</div>
    ) : null;

    return (
      <li key={locationInfo.name} className="locationBlock">
        <Link
          to={`/location/`}
          state={locationInfo}
          replace
          partiallyActive={false}
        >
          <div>
            <h2>{locationInfo.name}</h2>
            <address>{locationInfo.address}</address>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <h1 className="centerText">Our Locations</h1>
      <div>
        <div style={{ display: "flex" }}>
          <ul className="locationList">{locationList}</ul>
          <GoogleMap locations={locations} />
        </div>
        <div className="center">
          <a
            href="https://www.google.com/maps/search/lifelong/@37.8445667,-122.4080733,11z/data=!4m2!2m1!6e2"
            alt="Find a location closest to you."
          >
            <button className="blueButton">Find Your Closest Location</button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Locations;
