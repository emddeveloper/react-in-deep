import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  //js class constructor its call during class initializing
  constructor(props) {
    //super is the reference of parent class here React.Component
    super(props)
    //Initialize the state
    this.state = {
      latitude: null,
      errorMessage: ""
    }
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
