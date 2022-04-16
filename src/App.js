import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Fotter/Footer';
import Header from './Pages/Sheard/Header/Header';
import Login from './Pages/Login/Login/Login'
import Signup from './Pages/Login/Signup/Signup';
import Cart from './Pages/Home/Cart/Cart';
import { createContext, useState } from 'react';
import RequireAuth from './Pages/Sheard/RuqireAuth/RequireAuath';


export const MealContext = createContext();

function App() {
  const [cartQuantity, setCartQuantiay] = useState([]);
  return (
    <MealContext.Provider value={[cartQuantity, setCartQuantiay]}>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/cart' element={
            <RequireAuth><Cart></Cart></RequireAuth>
          }></Route>
        </Routes>
        <Footer />
      </div>
    </MealContext.Provider>
  );
}

export default App;
