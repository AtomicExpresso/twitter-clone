import { useState } from "react"
import articleImageOne from '../assets/articleone.webp';
import articleImageTwo from '../assets/articleone.webp';
import articleImageThree from '../assets/articletwo.webp';
import { ProfileThree, ProfileFour } from '../componets/storage/profileInfo';

function CreateArticle({ type, articleDate, articleDesc, articleImg, articleTrend }) {
  return (
    <>
      <div className="article-inner-content">
        <div className="article-col-one">
          <div className="article-top-bar">
            <h1>{type}</h1>
            <h1>•</h1>
            <h1>{articleDate}</h1>
          </div>
          <div className="article-inner-bar">
            <p>{articleDesc}</p>
          </div>
          <div className="article-bottom-bar">
            <h1>{articleTrend}</h1>
          </div>
        </div>
        <div className="article-img">
          <img src={articleImg} alt="Article image" />
        </div>
      </div>
      <hr></hr>
    </>
  )
};

function CreateFollowSuggest({ profilePic, fullName, Username, profileBio, followingCount, followersCount, badge }) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="follow-suggest-inner-content">
      <div className="person-row">
        <div className="person-pfp" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={profilePic} alt="" />
        </div>
        <div className="person-text">
          <h1>{fullName}</h1>
          <h1>{Username}</h1>
          {badge && <img src={badge} alt="Verified" />}
        </div>
        <div className="follow-btn">
          <button className='btn btn-primary'>Follow</button>
        </div>
      </div>
      <hr></hr>
      {isHovering && (
        <div className="popup" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="popup-top-bar">
            <div className="pop-img">
              <img src={profilePic} alt="pfp" />
            </div>
            <button className="btn btn-primary">Follow</button>
          </div>
          <div className="pop-text">
            <div className="pop-name-container">
              <h1>{fullName}</h1>
              {badge && <img src={badge} alt="Verified" />}
            </div>
            <h2>{Username}</h2>
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
  )
}

const RightSideBar = () => {
  return (
    <div className="right-side-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search twitter..." />
      </div>
      <div className="news-content">
        <h1>What's Happening?</h1>
        <hr></hr>
        <div className="article-content">
          <CreateArticle
            type="Europe"
            articleDate="3/17/2024"
            articleDesc="Something happens in europe"
            articleImg={articleImageOne}
            articleTrend="Trending with #lmao"
          />
          <CreateArticle
            type="Sports"
            articleDate="3/18/2024"
            articleDesc="India vs Australia: India to earn a draw on Day 5 in Sydney"
            articleImg={articleImageTwo}
            articleTrend="Trending with #football"
          />
          <CreateArticle
            type="US news"
            articleDate="3/11/2024"
            articleDesc="Random bill passes the house"
            articleImg={articleImageThree}
            articleTrend="Trending with #idfk"
          />
        </div>
      </div>
    </div>
  );
}

const FollowSuggest = () => {
  return (
    <div className="follow-suggest-container">
      <h1>Who to follow</h1>
      <hr></hr>
      <CreateFollowSuggest
        profilePic={ProfileThree.ProfilePic}
        fullName={ProfileThree.ProfileRealName}
        Username={ProfileThree.ProfileUserName}
        profileBio={ProfileThree.ProfileBio}
        followingCount={ProfileThree.ProfileFollowingCount}
        followersCount={ProfileThree.ProfileFollowersCount}
        badge={ProfileThree.ProfileBadge}
      />
      <CreateFollowSuggest
        profilePic={ProfileFour.ProfilePic}
        fullName={ProfileFour.ProfileRealName}
        Username={ProfileFour.ProfileUserName}
        profileBio={ProfileFour.ProfileBio}
        followingCount={ProfileFour.ProfileFollowingCount}
        followersCount={ProfileFour.ProfileFollowersCount}
        badge={ProfileFour.ProfileBadge}
      />
      <div className="follow-suggest-bottom-bar">
        <a>Show more</a>
      </div>
    </div>
  );
}

export { RightSideBar, FollowSuggest };