import { postDesk, postDeskTwo } from './postDesc';
import { ProfileOne, ProfileTwo } from '../componets/storage/profileInfo';
import dots from '../assets/icons/dots.svg'
import commentIcon from '../assets/icons/comment.svg';
import repostIcon from '../assets/icons/repost.svg';
import likeIcon from '../assets/icons/like.svg';
import shareIcon from '../assets/icons/share.svg';

function CreatePost({ pfp, realName, userName, timePosted, postDesc, commentCount, repostCount, likeCount, shareCount, badge }) {
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
            {badge && <img src={badge} alt="Verified" />}
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
              <p>{commentCount}</p>
            </div>
            <div className="icon-item">
              <img src={repostIcon} alt="repost" />
              <p>{repostCount}</p>
            </div>
            <div className="icon-item">
              <img src={likeIcon} alt="like" />
              <p>{likeCount}</p>
            </div>
            <div className="icon-item">
              <img src={shareIcon} alt="share" />
              <p >{shareCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="post-config">
        <img src={dots} alt="settings"/>
      </div>
    </div>
  );
}



export default function DisplayPost() {
  return (
    <>
      <CreatePost
        pfp={ProfileOne.ProfilePic}
        realName={ProfileOne.ProfileRealName}
        userName={ProfileOne.ProfileUserName}
        badge={ProfileOne.ProfileBadge}
        timePosted="5s"
        postDesc={postDesk.postDescPara}
        commentCount={5}
        repostCount={1}
        likeCount={20}
        shareCount={450}
      />
      <CreatePost
        pfp={ProfileTwo.ProfilePic}
        realName={ProfileTwo.ProfileRealName}
        userName={ProfileTwo.ProfileUserName}
        badge={ProfileTwo.ProfileBadge}
        timePosted="2h"
        postDesc={postDeskTwo.postDescPara}
        commentCount={35}
        repostCount={100}
        likeCount={70}
        shareCount={10}
      />
    </>
  );
}