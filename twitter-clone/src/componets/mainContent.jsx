import { useState } from "react"
import { postDesk, postDeskTwo } from './postDesc';
import { ProfileOne, ProfileTwo } from '../componets/storage/profileInfo';
import dots from '../assets/icons/dots.svg'
import commentIcon from '../assets/icons/comment.svg';
import repostIcon from '../assets/icons/repost.svg';
import likeIcon from '../assets/icons/like.svg';
import shareIcon from '../assets/icons/share.svg';


//Construct posts
function CreatePost({ id, pfp, profileBio, realName, userName, timePosted, postDesc, commentCount, repostCount, likeCount, shareCount, badge, followingCount, followersCount }) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="post-content">
      <div className="pfp" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
        <img src={dots} alt="settings" />
      </div>
      {isHovering && (
        <div className="popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="popup-top-bar">
            <div className="pop-img">
              <img src={pfp} alt="pfp" />
            </div>
            <button className="btn btn-primary">Follow</button>
          </div>
          <div className="pop-text">
            <div className="pop-name-container">
              <h1>{realName}</h1>
              {badge && <img src={badge} alt="Verified" />}
            </div>
            <h2>{userName}</h2>
          </div>
          <div className="popup-desc">
            <p>{profileBio}</p>
          </div>
          <div className="pop-profile-stats">
            <h2><span>{followingCount}</span> Following</h2>
            <h2><span>{followersCount}</span> Followers</h2>
          </div>
        </div>
      )}
    </div>
  );
}


//Display posts
export default function DisplayPost() {

  return (
    <>
      <CreatePost
        id="userOne"
        pfp={ProfileOne.ProfilePic}
        profileBio={ProfileOne.ProfileBio}
        realName={ProfileOne.ProfileRealName}
        userName={ProfileOne.ProfileUserName}
        badge={ProfileOne.ProfileBadge}
        timePosted="5s"
        postDesc={postDesk.postDescPara}
        commentCount={5}
        repostCount={1}
        likeCount={20}
        shareCount={450}
        followingCount={ProfileOne.ProfileFollowingCount}
        followersCount={ProfileOne.ProfileFollowersCount}
      />
      <CreatePost
        id="userTwo"
        pfp={ProfileTwo.ProfilePic}
        profileBio={ProfileTwo.ProfileBio}
        realName={ProfileTwo.ProfileRealName}
        userName={ProfileTwo.ProfileUserName}
        badge={ProfileTwo.ProfileBadge}
        timePosted="2h"
        postDesc={postDeskTwo.postDescPara}
        commentCount={35}
        repostCount={100}
        likeCount={70}
        shareCount={10}
        followingCount={ProfileTwo.ProfileFollowingCount}
        followersCount={ProfileTwo.ProfileFollowersCount}
      />
    </>
  );
}

export { DisplayPost };