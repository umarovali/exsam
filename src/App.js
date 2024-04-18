import './App.css';
import Header from './components/Header/Header';
import All from './Pages/All/All.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Favorite from './Pages/Favorite/Favorite.jsx';
import Home from "./Pages/Home/Home.jsx";
import PublicPage from './PublicPage/PublicPage.jsx';
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/login' element={<PublicPage />} />
        <Route path='*' element={<>Error this page not found</>} />
      </Routes>




    </div>
  );
}

export default App;
