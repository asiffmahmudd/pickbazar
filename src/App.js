import './App.css';
import Grocery from './components/Grocery/Grocery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Grocery} />
      </Switch>
    </Router>
  );
}

export default App;
