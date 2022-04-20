import './styles/_Body.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/404';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './pages/Productos';
import Cart from './pages/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:category/" element={<ItemListContainer/>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
