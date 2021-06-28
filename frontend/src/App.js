import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import CourrierSortantPage from './pages/CourrierSortantPage';
import CourrierEntrantPage from './pages/CourrierEntrantPage';
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute';
import MenuPage from "./pages/MenuPage";
import CreateUserPage from "./pages/CreateUserPage";
import ListingUsersPage from "./pages/ListingUsersPage";
import GrantingRights from "./pages/GrantingRights";
import UpdateUserPage from "./pages/UpdateUserPage";


function App() {

  // useEffect(() => {
  //   window.addEventListener("beforeunload", () => localStorage.clear());
  // }, [])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/login'component={LoginPage} />
        <ProtectedRoute exact path='/menu'component={MenuPage} />
        <ProtectedRoute exact path='/create'component={CreateUserPage} />
        <ProtectedRoute exact path='/users'component={ListingUsersPage} />
        <ProtectedRoute exact path='/sortant'component={CourrierSortantPage} />
        <ProtectedRoute exact path='/entrant'component={CourrierEntrantPage} />
        <ProtectedRoute exact path='/'component={Home} />
        <ProtectedRoute exact path='/granting'component={GrantingRights} />
        <ProtectedRoute exact path='/update/:id'component={UpdateUserPage} />
      </Switch>
    </div>
  );
}

export default App;
