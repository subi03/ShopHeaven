import { lazy } from 'react';
import './styles/output.css';
import { Routes, Route } from 'react-router-dom';
import ItemsProvider from './components/Provider/ItemsProvider/ItemsProvider';
import CartProvider from './components/Provider/CartProvider/CartProvider';
import NavBar from './components/Navbar/NavBar';
import Cart from './Pages/Cart';

const Home = lazy(() => import('./Pages/Home'));
const NoPage = lazy(() => import('./Pages/NoPage'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Product = lazy(() => import('./Pages/Product'));


function App() {
    return (
        <ItemsProvider>
            <CartProvider>
                <Routes>
                    <Route path='/' element={<NavBar />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/home/cart' element={<Cart />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
                <Footer />
            </CartProvider>
        </ItemsProvider>
    );
}

export default App;
