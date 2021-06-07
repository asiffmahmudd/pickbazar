import './App.css';
import Grocery from './components/Grocery/Grocery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/CartStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Grocery} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
