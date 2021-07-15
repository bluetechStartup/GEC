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
import PasswordReset from "./pages/PasswordReset";
import ChangePassword from "./pages/ChangePassword";
import DisplayMailsPage from "./pages/DisplayMailsPage";
import ServicePage from "./pages/ServicePage";
import CreateServicePage from "./pages/CreateServicePage";
import CreateFunctionalityPage from "./pages/CreateFunctionalityPage";
import CreateProfilePage from "./pages/CreateProfilePage";
import ProfilePage from "./pages/ProfilePage";
import FunctionalityPage from "./pages/FunctionalityPage";
import MailDetailPage from './pages/MailDetailPage'
import UpdateServicePage from "./pages/UpdateServicePage";
import ReglesPage from "./pages/ReglesPage";


function App() {

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/login'component={LoginPage} />
        <Route exact path='/reset_password'component={PasswordReset} />
        <Route exact path='/reset_password/:token'component={PasswordReset} />
        <Route exact path='/mails'component={DisplayMailsPage} />
        <Route exact path='/mails/:id'component={MailDetailPage} />
        <Route exact path='/service'component={ServicePage} />
        <Route exact path='/service/:id'component={UpdateServicePage} />
        <Route exact path='/profiles'component={ProfilePage} />
        <Route exact path='/regles'component={ReglesPage} />
        <Route exact path='/functionalities'component={FunctionalityPage} />
        <Route exact path='/create-service'component={CreateServicePage} />
        <Route exact path='/create-functionality'component={CreateFunctionalityPage} />
        <Route exact path='/create-profile'component={CreateProfilePage} />
        <ProtectedRoute exact path='/change_password'component={ChangePassword} />
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
