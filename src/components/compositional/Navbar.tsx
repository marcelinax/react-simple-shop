import {BiShoppingBag} from 'react-icons/bi';
import { IShoppingCartProduct } from './../../models/IShoppingCartProduct';
import { Link } from 'react-router-dom';
import React from 'react';
import { RootState } from '../../store/store';
import { getCalculatedSumPrice } from './../../utils/getCalculatedSumPrice';
import { locales } from './../../Locales';
import { useSelector } from 'react-redux';

export const Navbar: React.FC = () => {
    
    const shoppingCartItems = useSelector((state: RootState) => state.shoppingCart.shoppingCartItems);

    const getCalculatedItemsAmount = (): number => {
        let amount = 0;
        if (shoppingCartItems.length > 0) {
            shoppingCartItems.forEach(item => {
                amount += item.amount;
            });
        }
        return amount;
    };

    return (
        <div className='w-full shadow-lg'>
            <div className='container px-3 md:px-0 mx-auto py-8 flex justify-between items-center'>
                <Link to='/' className='text-2xl font-semibold'>
                    {locales.shopvibe}
                </Link>
                <Link to='/shopping-cart' className='flex relative items-end cursor-pointer'>
                    {shoppingCartItems.length > 0 && <span className='absolute -top-3 right-9 bg-secondary text-white px-1 text-xs rounded-sm z-10'>{getCalculatedItemsAmount()}</span>}
                    <BiShoppingBag size={24} className='mr-1'/>
                    <span className='text-sm font-bold text-secondary'>${getCalculatedSumPrice(shoppingCartItems)}</span>
                </Link>
            </div>
        </div>
    );
};
