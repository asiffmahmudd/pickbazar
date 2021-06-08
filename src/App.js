import './App.css';
import Grocery from './components/Grocery/Grocery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/CartStore';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Grocery} />
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
