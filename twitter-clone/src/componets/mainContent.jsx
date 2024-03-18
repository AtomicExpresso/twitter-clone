import pfpImage from '../assets/pfp.png'; // Import the profile picture image


function CreatePost({ pfp, realName, userName, timePosted, postDesc }) {
  return (
    <div className="post-content">
      <div className="pfp">
        <img src={pfp}></img>
      </div>
      <div className="post-content-inner-container">
      <div className="top-bar">
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
    </div>
  );
}



export default function DisplayPost() {
  return (
    <>
      <CreatePost
        pfp={pfpImage}
        realName="Bob"
        userName="@bob123"
        timePosted="5s"
        postDesc="LOL"
      />
    </>
  );
}