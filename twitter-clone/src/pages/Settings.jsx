import rightArrow from '../assets/icons/right-arrow.svg';

function Settings() {
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-side-bar">
        <div className="settings-side-bar-top">
          <input type="text" placeholder="&#x1F50E; Search Settings" />
        </div>
        <div className="settings-side-bar-mid">
          <div className="settings-item">
            <h1>Your account</h1>
            <img src={rightArrow} alt="Settings" />
          </div>
          <div className="settings-item">
            <h1>Security</h1>
            <img src={rightArrow} alt="Settings" />
          </div>
          <div className="settings-item">
            <h1>Privacy</h1>
            <img src={rightArrow} alt="Settings" />
          </div>
          <div className="settings-item">
            <h1>Notifications</h1>
            <img src={rightArrow} alt="Settings" />
          </div>
          <div className="settings-item">
            <h1>Billing</h1>
            <img src={rightArrow} alt="Settings" />
          </div>
          <div className="settings-item">
            <h1>Accessibilty</h1>
            <img src={rightArrow} alt="Settings" />
          </div>
        </div>
      </div>
    </div>
  )
};


export default Settings;