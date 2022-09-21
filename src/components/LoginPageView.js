import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";

const LoginPageView = () => {
  const { setAuthorized } = useContext(userContext);
  const navigate = useNavigate();
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  setAuthorized(false);

  let onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCredentials({ ...credentials, [name]: value });
  };

  const validCredentials = () => {
    if (credentials.username === "") {
      alert("Invalid Username");
      return false;
    } else if (credentials.password === "") {
      alert("Invalid Password");
      return false;
    }
    return true;
  };

  const onClickHandler = () => {
    if (validCredentials()) setAuthorized(true);
    return navigate("/home");
  };

  return (
    <div className="loginPage" style={{ marginTop: "5rem" }}>
      <p className="loginLogo">E-SHOP.COM</p>
      <input
        type="text"
        placeholder="Username"
        className="loginInput"
        name="username"
        value={credentials.username}
        onChange={onChangeHandler}
      ></input>
      <input
        type="text"
        placeholder="Password"
        className="loginInput"
        name="password"
        value={credentials.password}
        onChange={onChangeHandler}
      ></input>
      <button className="login-btn" onClick={onClickHandler}>
        Login
      </button>
    </div>
  );
};

export default LoginPageView;
