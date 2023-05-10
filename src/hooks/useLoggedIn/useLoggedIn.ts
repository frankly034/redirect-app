import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logIn = () => {
    const redirect = location.state?.redirect || "/dashboard";
    setLoggedIn(true);
    navigate(redirect);
  };

  const logOut = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return { loggedIn, logIn, logOut };
};

export default useLoggedIn;
