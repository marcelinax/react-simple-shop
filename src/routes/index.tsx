import { BrowserRouter } from 'react-router-dom';
import RouterRoutes from './RouterRoutes';

const Router = () => {
    return (
        <BrowserRouter>
            <RouterRoutes/>
        </BrowserRouter>
    );
};

export default Router;