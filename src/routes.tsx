import{
    BrowserRouter as Router,
    Route,
    Routes

} from 'react-router-dom';

import { Catalogo } from './pages/catalogo';
import { Cart } from './pages/cart';

export  function AppRoutes(){
    return(

        <Router>          
            <Routes>
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>         

        </Router>
        
    )
}