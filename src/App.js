import './App.css';

import {
  BrowserRouter as Router
  , Switch
  , Route
  , Link
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <Switch>
          <Route path={'/about'} component={AboutPage}></Route>
          <Route path={'/main'} component={MainPage}></Route>
          <Route path={'/todo'} component={Todo}></Route>
          <Route path={'/'} component={MainPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
