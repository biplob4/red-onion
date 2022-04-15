import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Fotter/Footer';
import Header from './Pages/Sheard/Header/Header';
import Login from './Pages/Login/Login/Login'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
