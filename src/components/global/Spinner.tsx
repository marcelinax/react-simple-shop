import { BiLoader } from 'react-icons/bi';
import React from 'react';

export const Spinner: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <BiLoader size={40} className='spinner'/>
        </div>
       
    );
};
