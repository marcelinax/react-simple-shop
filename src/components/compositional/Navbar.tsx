import {BiShoppingBag} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React from 'react';
import { locales } from './../../Locales';

export const Navbar:React.FC = () => {
    return (
        <div className='w-full shadow-lg'>
            <div className='container mx-auto py-8 flex justify-between items-center'>
                <Link to='/' className='text-2xl font-semibold'>
                    {locales.shopvibe}
                </Link>
                <Link to='/shopping-cart' className='flex relative items-end cursor-pointer'>
                    <span className='absolute -top-3 right-8 bg-secondary text-white px-1 text-xs rounded-sm z-10'>3</span>
                    <BiShoppingBag size={24} className='mr-1'/>
                    <span className='text-sm font-bold text-secondary'>$423</span>
                </Link>
            </div>
        </div>
    );
};
