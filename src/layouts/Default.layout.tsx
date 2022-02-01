import { Navbar } from '../components/compositional/Navbar';
import React from 'react';

interface Props {
    children?: JSX.Element
}

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return <div >
        <Navbar />
        {children}
    </div>;
};
