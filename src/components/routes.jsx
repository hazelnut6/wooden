import App from '../App';
import Categories from './Categories';
import ProductDetails from './ProductDetails';
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import NotFound from './NotFound'


const routes =[
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: '/categories',
        element: <Categories />,
    },
    {
        path: '/product/:productName',
        element: <ProductDetails />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/cart',
        element: <Cart />,
    },
];

export default routes;