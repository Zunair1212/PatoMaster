import './App.css';
import Home  from './pages/home';
import Menu  from './pages/menu';
import Reservation  from './pages/reservation';
import Gallery  from './pages/gallery';
import About  from './pages/about';
import Blog  from './pages/blog';

import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/reservation' element={<Reservation/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
   

   </Routes>
   <Footer/>

   </BrowserRouter>
  );
}

export default App;
