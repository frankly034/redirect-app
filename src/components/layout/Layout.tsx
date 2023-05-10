import { useLoggedInContext } from "../../context";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const { loggedIn, logOut } = useLoggedInContext();
  return (
    <div>
      <header>
        <Link className="logo" to="#">
          Sprint Features
        </Link>
        <nav>
          {loggedIn && (
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li onClick={logOut}>
                <Link to="#">Logout</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
