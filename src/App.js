import './App.css';
import Grocery from './components/Grocery/Grocery';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="row justify-content-center">
        <div className="col-lg-3 sidebar-container">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-9 product-container justify-content-center">
          <Grocery></Grocery>
        </div>
      </div>
      
      
      
      
    </div>
  );
}

export default App;
