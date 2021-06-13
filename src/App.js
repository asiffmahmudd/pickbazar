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
import OrderReceived from './components/OrderReceived/OrderReceived';
import Dashboard from './components/Admin/Dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Grocery} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/order-received">
            <OrderReceived></OrderReceived>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
