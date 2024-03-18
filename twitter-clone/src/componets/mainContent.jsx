import { postDesk, postDeskTwo } from './postDesc';
import pfpImage from '../assets/pfp.png';
import commentIcon from '../assets/icons/comment.svg';
import repostIcon from '../assets/icons/repost.svg';
import likeIcon from '../assets/icons/like.svg';
import shareIcon from '../assets/icons/share.svg';

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
            <p>•</p>
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
            <div className="icon-item">
              <img src={commentIcon} alt="comment" />
              <p>96</p>
            </div>
            <div className="icon-item">
              <img src={repostIcon} alt="repost" />
              <p>126</p>
            </div>
            <div className="icon-item">
              <img src={likeIcon} alt="like" />
              <p>56</p>
            </div>
            <div className="icon-item">
              <img src={shareIcon} alt="share" />
              <p >12</p>
            </div>
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
        postDesc={postDesk.postDescPara}
      />
      <CreatePost
        pfp={pfpImage}
        realName="Some dude"
        userName="@throwaway6382"
        timePosted="2h"
        postDesc={postDeskTwo.postDescPara}
      />
    </>
  );
}