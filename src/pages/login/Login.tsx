import "./Login.css";
const Login = () => {
  return (
    <div className="Login">
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value="john@example.com"
              disabled
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value="password"
              disabled
            />
          </div>
          <div>
            <button type="button" onClick={() => null}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
