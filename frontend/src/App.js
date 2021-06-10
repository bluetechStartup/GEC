import { Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Switch>
      <Route exact path='/'component={LoginPage} />
      <Route exact path='/form'component={FormPage} />
      <ProtectedRoute exact path='/home'component={Home} />
    </Switch>
  );
}

export default App;
