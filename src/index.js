//Imort the React and ReactDOM
import React from "react"
import ReactDOM from "react-dom"

//Create a react component
const App = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>Hello !</p>
      <button style={{ backgroundColor: "blue", color: "white" }}>Submit</button>
    </div>
  )
}

//Take the react component and display in screen
ReactDOM.render(<App />, document.getElementById("root"))
