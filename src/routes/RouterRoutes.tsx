import { Route, Routes } from 'react-router-dom';

import { HomepageView } from '../views/Homepage.view';
import { ProductView } from '../views/Product.view';
import { ShoppingCartView } from '../views/ShoppingCart.view';

const RouterRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomepageView />} />
            <Route path='/product/:id' element={<ProductView />} />
            <Route path='/shopping-cart' element={<ShoppingCartView />} />
        </Routes>
    );
};

export default RouterRoutes;
