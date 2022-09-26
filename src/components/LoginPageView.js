import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthorized } from "../redux/reducer/authReducer";

const LoginPageView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const isAuthorized = useSelector((state) => state.authReducer.isAuthorized);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCredentials({ ...credentials, [name]: value });
  };

  const onLoginButtonHandler = () => {
    dispatch(setAuthorized(credentials, false));
    if (isAuthorized) alert("Login successfully");
    return isAuthorized ? navigate("/home") : navigate("");
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
      <button className="login-btn" onClick={onLoginButtonHandler}>
        Login
      </button>
    </div>
  );
};

export default LoginPageView;
