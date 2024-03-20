import { MainProfile, ProfileOne, ProfileTwo, ProfileThree, ProfileFour } from '../componets/storage/profileInfo';

function Profile() {
  return (
    <div className="profile-page-container">
      <div className="profile-banner">
        <img src="" alt="Profile Banner" />
      </div>
      <div className="profile-top-bar">
        <div className="profile-pic">
          <img src={MainProfile.ProfilePic} alt="Profile pic" />
        </div>
        <div className="profile-name-text">
          <h1>{MainProfile.ProfileRealName}</h1>
          <h2>{MainProfile.ProfileUserName}</h2>
        </div>
      </div>
    </div>
  )
}

export default Profile;