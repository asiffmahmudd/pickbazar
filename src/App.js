import './App.css';
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
import AdminProducts from './components/Admin/Pages/AdminProducts/AdminProducts';
import Coupons from './components/Admin/Pages/Coupons/Coupons';
import Settings from './components/Admin/Pages/Settings/Settings';
import Orders from './components/Admin/Pages/Orders/Orders';
import Category from './components/Admin/Pages/Category/Category';
import Customers from './components/Admin/Pages/Customers/Customers';
import { ProductDrawerProvider } from './contexts/ProductDrawerContext';
import UserProfile from './components/UserDashboard/Profile/Profile';
import UserOrders from './components/UserDashboard/UserOrders/UserOrders';
import SingleProduct from './components/SingleProduct/SingleProduct';
import PageLayout from './components/PageLayout/PageLayout';
import { CouponContextProvider } from './contexts/CouponContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Switch>
            <CouponContextProvider>
              <Route exact path="/product/:id">
                <SingleProduct></SingleProduct>
              </Route>
              <Route exact path="/">
                <PageLayout></PageLayout>  
              </Route>
              <Route exact path="/category/:index/:category">
                <PageLayout></PageLayout>  
              </Route>

              <Route exact path="/user/profile" component={UserProfile} />
              <Route exact path="/user/orders" component={UserOrders} />

            
              <Route exact path="/checkout">
                <Checkout></Checkout>
              </Route>
              <Route exact path="/order-received">
                <OrderReceived></OrderReceived>
              </Route>
            

              <ProductDrawerProvider>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/products" component={AdminProducts} />
                <Route exact path="/admin/category" component={Category} />
                <Route exact path="/admin/coupons" component={Coupons} />
                <Route exact path="/admin/customers" component={Customers} />
                <Route exact path="/admin/orders" component={Orders} />
                <Route exact path="/admin/settings" component={Settings} />
              </ProductDrawerProvider>
            </CouponContextProvider>
          </Switch>
        </Router>
      </AuthProvider>  
    </Provider>
  );
}

export default App;
