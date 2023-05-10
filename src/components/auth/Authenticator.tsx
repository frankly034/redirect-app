import { Navigate } from "react-router-dom";
import { useLoggedIn } from "../../hooks";
import { LoggedInContext } from "../../context";

const withAuthenticator = (Component: React.ComponentType) => {
  return () => {
    const { logIn, logOut, loggedIn } = useLoggedIn();

    if (!loggedIn && location.pathname !== "/") {
      return <Navigate to="/" state={{ redirect: location.pathname }} />;
    }

    return (
      <LoggedInContext.Provider value={{ loggedIn, logIn, logOut }}>
        <Component />
      </LoggedInContext.Provider>
    );
  };
};

export default withAuthenticator;
