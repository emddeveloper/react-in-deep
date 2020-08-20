import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  //Babel will automatically create the constructor and super no need to write here and dont use this while not using constructor
  state = {
    latitude: null,
    errorMessage: ""
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Update the state
        this.setState({
          latitude: position.coords.latitude
        })
      },
      err => this.setState({ errorMessage: err.message })
    )
  }
  componentDidUpdate() {
    console.log("did update")
  }
  componentWillUnmount() {
    console.log("will unmount")
  }
  //React says we have to define render() !!
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude:{this.state.latitude}</div>
    }
    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
