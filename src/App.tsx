import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import Router from './routes';
import { ToastContainer } from 'react-toastify';

function App() {

    return (
        <>
            <Router/>
            <ToastContainer position='top-center'/>
        </>
    );
}

export default App;
