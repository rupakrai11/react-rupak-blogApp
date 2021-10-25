import "./settings.css";
import SideBar from "./../../components/siderbar/SideBar";
import SetImg from "../../images/DSC_0600.JPG";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";
import axios from "axios";
export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">UpdateTitle</span>
            <span className="settingsDeleteTitle">Delete Title</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img
                src={file ? URL.createObjectURL(file) : user.profilePic}
                alt="setting image"
                width="100%"
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder={user.username}
              className="settingsFormInput"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder={user.email}
              className="settingsFormInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="settingsFormInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="settingsSubmit" type="submit">
              Update
            </button>
            {success && (
              <span style={{ color: "green", textAlign: "center" }}>
                Profile Updated successfully
              </span>
            )}
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
}
