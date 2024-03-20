function Settings() {
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-side-bar">
        <div className="settings-side-bar-top">
          <input type="text" placeholder="Search Settings" />
        </div>
        <div className="serrints-side-bar-mid">
          <ul>
            <li><h1>Your account</h1></li>
            <li><h1>Monetization</h1></li>
            <li><h1>Subscriptions</h1></li>
            <li><h1>Security</h1></li>
            <li><h1>Privacy</h1></li>
            <li><h1>Notfifications</h1></li>
            <li><h1>Accessibilty & Langauges</h1></li>
          </ul>
        </div>
      </div>
    </div>
  )
};


export default Settings;