import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';

import { HomepageView } from '../views/Homepage.view';
import { ProductView } from '../views/Product.view';
import { ShoppingCartView } from '../views/ShoppingCart.view';
import { useEffect } from 'react';

const RouterRoutes: React.FC = () => {
    const location = useLocation();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
            >
                <Routes location={location}>
                    <Route path='/' element={<HomepageView />} />
                    <Route path='/product/:slug' element={<ProductView />} />
                    <Route path='/shopping-cart' element={<ShoppingCartView />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RouterRoutes;
