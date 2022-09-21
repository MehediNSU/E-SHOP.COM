const LoginPageView = () => {
  return (
    <div className="loginPage" style={{ marginTop: "5rem" }}>
      <text className="loginLogo">E-SHOP.COM</text>
      <input type="text" placeholder="Username" className="loginInput"></input>
      <input type="text" placeholder="Password" className="loginInput"></input>
      <button className="login-btn">Login</button>
    </div>
  );
};

export default LoginPageView;
