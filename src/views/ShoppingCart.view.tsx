import { DefaultLayout } from '../layouts/Default.layout';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import React from 'react';
import { ShoppingCartItem } from '../components/shoppingCart/ShoppingCartItem';
import { locales } from './../Locales';

export const ShoppingCartView: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='w-full flex flex-col'>
                <h1 className='text-3xl font-medium text-center my-16'>{locales.your_cart}</h1>
                <div className='w-full flex px-16'>
                    <div className='flex basis-3/4 mr-8 flex-col'>
                        <ShoppingCartItem/>
                        <ShoppingCartItem/>
                        <ShoppingCartItem/>
                    </div>
                    <div className='flex basis-1/4 flex-col'>
                        <div className='bg-light-gray-100 shadow-lg rounded-md w-full'>
                            <div className='w-full px-8 py-5 border-b-[1.5px] border-gray-300/70'>
                                <h6 className='text-lg font-medium'>{locales.order_summary}</h6>
                            </div>
                            <div className='w-full p-8'>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='text-zinc-500 font-medium text-sm'>{locales.subtotal}</p>
                                    <p className='font-medium text-sm'>$418</p>
                                </div>
                                <div className='w-full flex justify-between items-center mb-3'>
                                    <p className='text-zinc-500 font-medium text-sm'>{locales.shipping}</p>
                                    <p className='font-medium text-sm'>{locales.free}</p>
                                </div>
                            </div>
                            <div className='w-full bg-light-gray-200 px-8 py-5'>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='text-lg font-medium'>{locales.total}</p>
                                    <p className='text-lg font-medium'>$418</p>
                                </div>
                            </div>
                        </div>
                        <PrimaryButton title={locales.checkout} type='button' className='mt-4 py-4'/>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};
