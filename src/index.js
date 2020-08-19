import React from "react"
import ReactDOM from "react-dom"
import CommentDetails from "./CommentDetails"
import faker from "faker"
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author={faker.name.firstName()} timeAgo="Today at 5:50PM" content="Nice Post from your bro." avatar={faker.image.avatar()} />
      <CommentDetails author={faker.name.firstName()} timeAgo="Today at 5:50PM" content="Nice Post from your bro." avatar={faker.image.avatar()} />
      <CommentDetails author={faker.name.firstName()} timeAgo="Today at 5:30PM" content="Nice Post from your bro." avatar={faker.image.avatar()} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
