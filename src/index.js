import React from "react"
import ReactDOM from "react-dom"
import CommentDetails from "./CommentDetails"
import ApprovalCard from "./ApprovalCard"
import faker from "faker"
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure ?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author={faker.name.firstName()} timeAgo="Today at 5:50PM" content="Nice Post from your bro." avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author={faker.name.firstName()} timeAgo="Today at 5:50PM" content="Nice Post from your bro." avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author={faker.name.firstName()} timeAgo="Today at 5:30PM" content="Nice Post from your bro." avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
