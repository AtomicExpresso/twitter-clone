import articleImageOne from '../assets/articleone.webp';
import articleImageTwo from '../assets/articleone.webp';
import articleImageThree from '../assets/articletwo.webp';
import profilePicOne from '../assets/pfp.png';
import profilePicTwo from '../assets/pfp.png';

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

function CreateFollowSuggest({ profilePic, fullName, Username }) {
  return (
    <div className="follow-suggest-inner-content">
      <div className="person-row">
        <div className="person-pfp">
          <img src={profilePic} alt="" />
        </div>
        <div className="person-text">
          <h1>{fullName}</h1>
          <h1>{Username}</h1>
        </div>
        <div className="follow-btn">
          <button className='btn btn-primary'>Follow</button>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

const RightSideBar = () => {
  return (
    <div className="right-side-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search something..." />
      </div>
      <div className="news-content">
        <h1>What's Happening?</h1>
        <hr></hr>
        <div className="article-content">
          <CreateArticle
            type="Europe"
            articleDate="3/17/2024"
            articleDesc="Europe invades someone"
            articleImg={articleImageOne}
            articleTrend="Trending with #lmao"
          />
          <CreateArticle
            type="Sports"
            articleDate="3/18/2024"
            articleDesc="India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test"
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
        profilePic={profilePicOne}
        fullName="Kyle Morgan"
        Username="@somedude781"
      />
      <CreateFollowSuggest
        profilePic={profilePicOne}
        fullName="Beth Smith"
        Username="@smith808"
      />
      <div className="follow-suggest-bottom-bar">
        <a>Show more</a>
      </div>
    </div>
  );
}

export { RightSideBar, FollowSuggest };