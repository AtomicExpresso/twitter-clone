import { Component } from 'react';

function CreatePost({ realName, userName, timePosted, postDesc }) {
  return (
    <div className="post-content">
      <div className="top-bar">
        <div className="pfp">

        </div>
        <div className="top-text">
          <h1>{realName}</h1>
          <h2>{userName}</h2>
          <h2>{timePosted}</h2>
        </div>
      </div>
      <div className="post-inner-content">
        <div className="post-desc">
          <p>{postDesc}</p>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="icon-row">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}



export default function DisplayPost() {
  return (
    <>
      <CreatePost realName="Bob" userName="@bob123" timePosted="5s" postDesc = "LOL" />
    </>
  );
}