import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { AccountPage, DashboardPage, LoginPage, NotFoundPage } from "./pages";
import withAuthenticator from "./components/auth/Authenticator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

const AppWithAuthenticator = withAuthenticator(App);

export default AppWithAuthenticator;
