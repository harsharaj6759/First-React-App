import React from "react";
import ReactDOM from "react-dom";
import LocationDisplay from "./location.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, longitude: null, error: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        this.setState({ error: error.message });
      }
    );
  }
  render() {
    if (this.state.error && !this.state.latitude) {
      return <div>error: {this.state.error}</div>;
    } else if (!this.state.error && this.state.latitude) {
      return (
        <div>
          <LocationDisplay latitude={this.state.latitude} />
        </div>
      );
    } else {
      return <div>Waiting for user permission</div>;
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
