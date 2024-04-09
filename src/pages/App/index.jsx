import {useRoutes, BrowserRouter} from 'react-router-dom';
import { ShopProvider } from '../../context';
import Inicio from '../Inicio';
import Entrenamientos from '../Entrenamientos';
import Suplementos from '../Suplementos';
import Contacto from '../Contacto';
import Pedido from '../Pedido';
import NotFound from '../NotFound';
import NavBar from '../../components/NavBar';
import MovilMenu from '../../components/MovilMenu';
import ShoppingCart from '../../components/ShoppingCart';
import Suplemento from '../Suplemento';
import CartNoti from '../../components/CartNoti';
import WhatsAppGreen from '../../components/icons/WhatsAppGreen';

const AppRoutes = () => {
  return useRoutes([
    {path: '/', element: <Inicio />},
    {path: '/entrenamientos', element: <Entrenamientos />},
    {path: '/suplementos/:id', element: <Suplemento />},
    {path: '/suplementos', element: <Suplementos />},
    {path: '/contacto', element: <Contacto />},
    {path: '/pedido', element: <Pedido />},
    {path: '/*', element: <NotFound />},
  ])
}

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <MovilMenu/>
        <ShoppingCart/>
        <CartNoti/>
        <WhatsAppGreen/>
      </BrowserRouter>
    </ShopProvider>
  )
}
