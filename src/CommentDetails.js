import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"

const CommentDetails = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  )
}

export default CommentDetails
