import React from "react";
import GoogleMap from "../components/GoogleMap.js";
import Layout from "../components/Layout.js";

/*
Current Props: {
  name,
  address,
  lat,
  long,
  emergencyServices
}
*/
const Location = ({ location, locationID }) => {
  const { name, address, lat, long, emergencyServices } = location.state;

  return (
    <Layout>
      <h1 className="centerText">{name}</h1>
      <h2>Services available at this location:</h2>
      <GoogleMap
        locations={[location.state]}
        center={{ lat: lat, lng: long }}
      />

      <div className="slice">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </Layout>
  );
};

export default Location;
