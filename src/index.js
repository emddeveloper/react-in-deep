import React from "react"
import ReactDOM from "react-dom"
import CommentDetails from "./CommentDetails"
import faker from "faker"
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
