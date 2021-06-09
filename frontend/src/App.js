import { Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route exact path='/'component={LoginPage} />
      <Route exact path='/home'component={Home} />
    </Switch>
  );
}

export default App;
