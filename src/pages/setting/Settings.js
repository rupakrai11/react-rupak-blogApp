import "./settings.css";
import SideBar from "./../../components/siderbar/SideBar";
import SetImg from "../../images/DSC_0600.JPG";

export default function Settings() {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">UpdateTitle</span>
            <span className="settingsDeleteTitle">Delete Title</span>
          </div>
          <form className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img src={SetImg} alt="setting image" width="100%" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="rupak"
              className="settingsFormInput"
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="rairupak81@gmail.com"
              className="settingsFormInput"
            />
            <label htmlFor="">Password</label>
            <input type="password" className="settingsFormInput" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
}
