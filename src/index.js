import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

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

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />
    }
    return <Spinner message="Please accept location request" />
  }
  //React says we have to define render() !!
  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
