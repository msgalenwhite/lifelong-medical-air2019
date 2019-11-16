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
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
        center={props.center ? props.center : defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
