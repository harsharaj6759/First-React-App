import React from "react";

const singleComment = () => {
  return (
    <div class="comment">
      <a class="avatar">
        <img alt="profile image"></img>
      </a>
      <div class="content">
        <a class="author">Matt</a>
        <div class="metadata">
          <span class="date">Today at 5:42PM</span>
        </div>
        <div class="text">How artistic!</div>
        <div class="actions">
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default singleComment;
