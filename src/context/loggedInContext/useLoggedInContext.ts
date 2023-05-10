import React from "react";
import LoggedInContext from "./loggedInContext";

const useLoggedInContext = () => React.useContext(LoggedInContext);

export default useLoggedInContext;
