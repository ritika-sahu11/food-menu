import './App.css';
import Header from './Header';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import Checkout from './Checkout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
    <Routes>
    <Route path='/' element={<><Header/><div className="container">
      <Left/>
      <Middle/>
      <Right/>
      </div></>}
      />
      <Route path='/checkout' element={<><Header/><Checkout/></>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
