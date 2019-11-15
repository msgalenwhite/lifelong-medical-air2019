import React from "react";
import GoogleMapReact from "google-map-react";
import { FaHospital } from "react-icons/fa";
const { Link } = require("gatsby");

const defaultProps = {
  center: { lat: 37.8201475, lng: -122.3864538 },
  zoom: 11,
  height: "60vh",
  width: "50vw"
};

const pinStyle = {
  borderRadius: "10px",
  backgroundColor: "#BFD430",
  height: "1em"
};

const LOCATION_COLOR = "blue";
const EMERGENCY_COLOR = "red";

const GoogleMap = props => {
  // const googleMapLoader = fetch("")
  //   .then ( response => {
  //     if ( response.ok ) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`;
  //       let error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then ( response => response.json() )
  //   .then ( response => {
  //     console.log(response)
  //   })
  //   .catch ( error => console.error(`Error in fetch: ${error.message}`) );


  // const [mapCenter, setMapCenter] = React.useState(
  //   props.center ? props.center : defaultProps.center
  // ); // maybe a problem with state when we load next locations page?

  const onChildMouseEnter = () => {
    // goal: hovering over something will show its name in a blurb, clickable to get to that location's page.  Maybe with service icons?
  };

  const onChildMouseLeave = () => {
    // goal: exiting will cause the blurb to disappear
  };

  const markers = props.locations.map((locationInfo, index) => {
    if (locationInfo.lat === null || locationInfo.long === null) {
      return;
    }
    const markerColor = locationInfo.emergencyServices
      ? EMERGENCY_COLOR
      : LOCATION_COLOR;
    return (
      <div
        key={index}
        style={pinStyle}
        text={locationInfo.name}
        lat={locationInfo.lat}
        lng={locationInfo.long}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
      >
        <FaHospital color={markerColor} />
      </div>
    );
  });

  const height = props.height ? props.height : defaultProps.height;
  const width = props.width ? props.width : defaultProps.width;

  return (
    <div style={{ height: height, width: width, marginBottom: "1em" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ACCESS_TOKEN_HERE}}

        center={props.center ? props.center : defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
