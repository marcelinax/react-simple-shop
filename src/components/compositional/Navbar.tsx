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
                <div className='flex relative items-end cursor-pointer'>
                    <span className='absolute -top-2 right-7 bg-secondary text-white px-1 text-xs rounded-sm z-10'>3</span>
                    <BiShoppingBag size={22} className='mr-1'/>
                    <span className='text-xs font-bold text-secondary'>$423</span>
                </div>
            </div>
        </div>
    );
};
