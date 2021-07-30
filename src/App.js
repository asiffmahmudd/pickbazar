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
import UserProfile from './components/UserDashboard/Profile/UserProfile';
import UserOrders from './components/UserDashboard/UserOrders/UserOrders';
import SingleProduct from './components/SingleProduct/SingleProduct';
import PageLayout from './components/PageLayout/PageLayout';
import { CouponContextProvider } from './contexts/CouponContext';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Reset from './components/Reset/Reset';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminRoute from './components/AdminRoute/AdminRoute';
import { ItemContextProvider } from './contexts/ItemContext';
import VerifyEmail from './components/VerfiyEmail/VerifyEmail';
import VerifyRoute from './components/VerifyRoute/VerifyRoute';

function App() {
  
  return (
    <Provider store={store}>
      <ItemContextProvider>
        <AuthProvider>
          <Router>
            <Switch>
              <CouponContextProvider>
                <Route exact path="/">
                  <PageLayout></PageLayout>  
                </Route>
                <Route exact path="/product/:id">
                  <SingleProduct></SingleProduct>
                </Route>
                <Route exact path="/category/:index/:category">
                  <PageLayout></PageLayout>  
                </Route>
                <Route exact path="/products/:search">
                  <PageLayout></PageLayout>  
                </Route>
                
                <VerifyRoute exact path="/verifyEmail">
                  <VerifyEmail></VerifyEmail>
                </VerifyRoute>
                <PrivateRoute exact path="/user/profile">
                  <UserProfile></UserProfile>
                </PrivateRoute>
                <PrivateRoute exact path="/user/orders">
                  <UserOrders></UserOrders>
                </PrivateRoute>
                <Route exact path="/login">
                  <Login></Login>
                </Route>
                <Route exact path="/signup">
                  <SignUp></SignUp>
                </Route>
                <Route exact path="/reset">
                  <Reset></Reset>
                </Route>
                <PrivateRoute exact path="/checkout">
                  <Checkout></Checkout>
                </PrivateRoute>
                <PrivateRoute exact path="/order-received">
                  <OrderReceived></OrderReceived>
                </PrivateRoute>
              

                <ProductDrawerProvider>
                  <AdminRoute exact path="/admin">
                    <Dashboard></Dashboard>
                  </AdminRoute>
                  <AdminRoute exact path="/admin/dashboard">
                    <Dashboard></Dashboard>
                  </AdminRoute>
                  <AdminRoute exact path="/admin/category">
                    <Category></Category>
                  </AdminRoute>
                  <AdminRoute exact path="/admin/coupons">
                    <Coupons></Coupons>
                  </AdminRoute>
                  <AdminRoute exact path="/admin/customers">
                    <Customers></Customers>
                  </AdminRoute>
                  <AdminRoute exact path="/admin/orders">
                    <Orders></Orders>
                  </AdminRoute>
                  <AdminRoute exact path="/admin/settings">
                    <Settings></Settings>
                  </AdminRoute>
                  
                    <AdminRoute exact path="/admin/products">
                      <AdminProducts></AdminProducts>
                    </AdminRoute>
                  
                </ProductDrawerProvider>
              </CouponContextProvider>
            </Switch>
          </Router>
        </AuthProvider> 
      </ItemContextProvider> 
    </Provider>
  );
}

export default App;
