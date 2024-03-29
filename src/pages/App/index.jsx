import {useRoutes, BrowserRouter} from 'react-router-dom';
import { ShopProvider } from '../../context';
import Inicio from '../Inicio';
import Entrenamientos from '../Entrenamientos';
import Suplementos from '../Suplementos';
import Membresias from '../Membresias';
import Contacto from '../Contacto';
import NotFound from '../NotFound';
import NavBar from '../../components/NavBar';
import MovilMenu from '../../components/MovilMenu';

const AppRoutes = () => {
  return useRoutes([
    {path: '/', element: <Inicio />},
    {path: '/entrenamientos', element: <Entrenamientos />},
    {path: '/suplementos/:id', element: <Suplementos />},
    {path: '/suplementos', element: <Suplementos />},
    {path: '/membresias', element: <Membresias />},
    {path: '/contacto', element: <Contacto />},
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
      </BrowserRouter>
    </ShopProvider>
  )
}
