import { useLoggedInContext } from "../../context";
import "./Login.css";
const Login = () => {
  const { logIn } = useLoggedInContext();
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
            <button type="button" onClick={logIn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
