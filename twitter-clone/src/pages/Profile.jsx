import { MainProfile } from '../componets/storage/profileInfo';
import Background from '../assets/profile-content/banner/bannerOne.png'

//User's profile page
function Profile() {
  return (
    <div className="profile-page-container">
      <div className="profile-banner" style={{ backgroundImage: `url(${Background})` }}>
        <div className="profile-pic">
          <img src={MainProfile.ProfilePic} alt="Profile pic" />
        </div>
      </div>
      <div className="profile-edit-btn">
        <button className='btn btn-primary'>Edit Profile</button>
      </div>
      <div className="profile-top-bar">
        <div className="profile-name-text">
          <div className='profile-name-container'>
            <h1>{MainProfile.ProfileRealName}</h1>
            <img src={MainProfile.ProfileBadge} title='Verifed by Twitter'></img>
          </div>
          <h2>{MainProfile.ProfileUserName}</h2>
          <div className="profile-mid-bar">
            <div className="profile-desc">
              <p>{MainProfile.ProfileBio}</p>
            </div>
            <div className="profile-follow-stats">
              <h2><span>{MainProfile.ProfileFollowingCount}</span> Following</h2>
              <h2><span>{MainProfile.ProfileFollowersCount}</span> Followers</h2>
            </div>
          </div>
        </div>
        <div className="profile-content-tabs">
          <h1>Posts</h1>
          <h1>Replies</h1>
          <h1>Media</h1>
          <h1>Likes</h1>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default Profile;