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
import Dashboard from './components/Admin/Pages/Dashboard/Dashboard';
import Products from './components/Admin/Pages/Products/Products';
import Coupons from './components/Admin/Pages/Coupons/Coupons';
import Settings from './components/Admin/Pages/Settings/Settings';
import Orders from './components/Admin/Pages/Orders/Orders';
import Category from './components/Admin/Pages/Category/Category';
import Customers from './components/Admin/Pages/Customers/Customers';
import { ProductDrawerProvider } from './contexts/ProductDrawerContext';
import UserProfile from './components/UserDashboard/Profile/Profile';
import UserOrders from './components/UserDashboard/UserOrders/UserOrders';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/order-received">
            <OrderReceived></OrderReceived>
          </Route>
          <Route path="/product/:id">
            <SingleProduct></SingleProduct>
          </Route>
          <Route path="/user/profile" component={UserProfile} />
          <Route path="/user/orders" component={UserOrders} />
          <Route exact path="/" component={Grocery} />
          <ProductDrawerProvider>
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/products" component={Products} />
            <Route exact path="/admin/category" component={Category} />
            <Route exact path="/admin/coupons" component={Coupons} />
            <Route exact path="/admin/customers" component={Customers} />
            <Route exact path="/admin/orders" component={Orders} />
            <Route exact path="/admin/settings" component={Settings} />
          </ProductDrawerProvider>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
