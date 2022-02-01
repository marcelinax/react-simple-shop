import { BiLoader } from 'react-icons/bi';
import React from 'react';

export const Spinner: React.FC = () => {
    return (
        <div className='w-full flex items-center justify-center h-full'>
            <BiLoader size={40} className='spinner'/>
        </div>
       
    );
};
