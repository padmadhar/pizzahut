import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import SignOut from './components/SignOut';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          {/* <Route path='/SignOut' element={<SignOut />} /> */}
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
