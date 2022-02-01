import { decreaseProductAmountInShoppingCart, deleteProductFromShoppingCart, increaseProductAmountInShoppingCart } from '../store/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultLayout } from '../layouts/Default.layout';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import React from 'react';
import { RootState } from '../store/store';
import { ShoppingCartItem } from '../components/shoppingCart/ShoppingCartItem';
import { getCalculatedSumPrice } from './../utils/getCalculatedSumPrice';
import { locales } from './../Locales';

export const ShoppingCartView: React.FC = () => {

    const shoppingCartItems = useSelector((state: RootState) => state.shoppingCart.shoppingCartItems);
    const dispatch = useDispatch();

    const renderShoppingCartItems = (): JSX.Element | JSX.Element[] => {
        return shoppingCartItems && shoppingCartItems.map(item => (
            <ShoppingCartItem onDeleteProduct={()=> {dispatch(deleteProductFromShoppingCart(item.product));}} onDecreaseProductAmount={() => { dispatch(decreaseProductAmountInShoppingCart(item.product)); }} onIncreaseProductAmount={() => { dispatch(increaseProductAmountInShoppingCart(item.product)); }}
                key={item.product.id} amount={item.amount} image={item.product.image} name={item.product.name} price={item.product.price} />
        ));
    };


    return (
        <DefaultLayout>
            <div className='w-full flex flex-col'>
                <h1 className='text-3xl font-medium text-center my-16'>{locales.your_cart}</h1>
                <div className='w-full flex flex-col lg:flex-row md:px-16'>
                    <div className='flex w-full lg:basis-3/4 lg:mr-8 flex-col lg:overflow-auto lg:h-[70vh] lg:pr-10 scrollbar'>
                        {renderShoppingCartItems()}
                    </div>
                    <div className='flex w-full lg:basis-1/4 flex-col px-3 lg:px-0 mb-10 lg:mb-0'>
                        <div className='bg-light-gray-100 shadow-lg rounded-md w-full'>
                            <div className='w-full px-8 py-5 border-b-[1.5px] border-gray-300/70'>
                                <h6 className='text-lg font-medium'>{locales.order_summary}</h6>
                            </div>
                            <div className='w-full p-8'>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='text-zinc-500 font-medium text-sm'>{locales.subtotal}</p>
                                    <p className='font-medium text-sm'>${getCalculatedSumPrice(shoppingCartItems)}</p>
                                </div>
                                <div className='w-full flex justify-between items-center mb-3'>
                                    <p className='text-zinc-500 font-medium text-sm'>{locales.shipping}</p>
                                    <p className='font-medium text-sm'>{locales.free}</p>
                                </div>
                            </div>
                            <div className='w-full bg-light-gray-200 px-8 py-5'>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='text-lg font-medium'>{locales.total}</p>
                                    <p className='text-lg font-medium'>${getCalculatedSumPrice(shoppingCartItems)}</p>
                                </div>
                            </div>
                        </div>
                        <PrimaryButton onClick={()=>{}} title={locales.checkout} type='button' className='mt-4 py-4'/>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};
