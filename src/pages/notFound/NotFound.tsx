import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h3>Oops❗️ We Lost That Page, But Found Your Socks 🤓</h3>
      <Link to="/dashboard">Go Home</Link>
    </div>
  );
};

export default NotFound;
