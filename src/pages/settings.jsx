import { useState } from "react";
import { BackButton } from "../components";
import SettingsStyle from "../styles/settings.module.css";

const Settings = ({ setAuth, user }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const handleUpdate = (e) => {
    e.preventDefault()
  }
  return (
    <>
      {!toggleEdit ? (
        <div className={SettingsStyle.container}>
          <img src={user.imgSrc} alt="user avatar" />
          <h2>{user.name}</h2>
          <h2>{user.id}</h2>
          <button onClick={() => setToggleEdit(true)}>Edit profile</button>
          <button onClick={() => setAuth(false)}>Logout</button>
        </div>
      ) : (
        <div className={SettingsStyle.edit_container}>
            <BackButton setState={setToggleEdit}/>
            <h2>Update you crecidential</h2>
            <form onSubmit={e => handleUpdate(e)}>
                <label>Username</label>
                <input placeholder={user.username} />
                <label>Password</label>
                <input placeholder={user.password} type="password" />
                <button>Update</button>
            </form>
        </div>
      )}
    </>
  );
};

export default Settings;
