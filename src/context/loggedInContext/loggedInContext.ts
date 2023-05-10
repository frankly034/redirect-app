import React from "react";

export type LoggedInContextType = {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const LoggedInContext = React.createContext<LoggedInContextType>({
  loggedIn: false,
  logIn: () => null,
  logOut: () => null,
});

export default LoggedInContext;
