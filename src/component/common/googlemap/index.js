import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Googlemap extends Component {
  static defaultProps = {
    center: {
      lat: 28.64,
      lng: 77.10,
    },
    zoom: 11,
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCRGc0A7V5GUplCJyYXl1a3XuNig0Tnvp4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={28.6438309}
            lng={77.0993931}
            text="My Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Googlemap;
