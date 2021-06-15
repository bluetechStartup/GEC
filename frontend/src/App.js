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

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/'component={LoginPage} />
        <Route exact path='/menu'component={MenuPage} />
        <Route exact path='/create'component={CreateUserPage} />
        <Route exact path='/users'component={ListingUsersPage} />
        <Route exact path='/sortant'component={CourrierSortantPage} />
        <Route exact path='/entrant'component={CourrierEntrantPage} />
        <ProtectedRoute exact path='/home'component={Home} />
      </Switch>
    </div>
  );
}

export default App;
