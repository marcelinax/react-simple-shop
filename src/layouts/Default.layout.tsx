import { Navbar } from '../components/compositional/Navbar';
import React from 'react';

interface Props {
    children?: JSX.Element
}

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
        <div className='min-h-screen max-w-screen flex flex-col'>
            <Navbar />
            {children}
        </div>
    );
};
