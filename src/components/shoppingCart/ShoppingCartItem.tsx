import {BiMinus, BiPlus, BiX} from 'react-icons/bi';

import React from 'react';

interface Props {
    image: string;
    name: string;
    price: string;
    amount: number;
    onIncreaseProductAmount: () => void;
    onDecreaseProductAmount: () => void;
    onDeleteProduct: () => void;
}

export const ShoppingCartItem: React.FC<Props> = ({ amount, image, name, price, onIncreaseProductAmount, onDecreaseProductAmount, onDeleteProduct }) => {

    
    return (
        <div className='w-full lg:border-b-2 lg:border-gray-300/70 py-8 lg:first:border-t-2 px-3 lg:px-0'>
            <div className='w-full flex h-full items-center relative'>
                <div style={{ backgroundImage: `url(${image})` }} className='min-w-[6rem] h-24 lg:h-56 xl:h-64 basis-24 lg:basis-56 xl:basis-64 lg:flex-2 shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover'/>
                <div className='lg:flex basis-full ml-4 lg:flex-1 pr-14'>
                    <div className='flex-1 mb-4 lg:mb-0'>
                        <h6 className='text-sm font-semibold'>{name}</h6>
                    </div>
                    <div className='flex-1 flex items-center justify-between'>
                        <div className='flex-1'>
                            <div className='bg-light-gray-200 w-fit flex items-center rounded-xl p-1'>
                                <BiMinus className='cursor-pointer' onClick={onDecreaseProductAmount}/>
                                <span className='mx-4 select-none'>{amount}</span>
                                <BiPlus className='cursor-pointer' onClick={onIncreaseProductAmount}/>
                            </div>
                        </div>
                        <div className='flex-1 text-right md:text-left lg:text-center'>
                            <p className='font-semibold'>${price}</p>
                        </div>
                        <div className='absolute lg:static top-50 -translate-y-1/2 right-2 lg:-translate-y-0'>
                            <div className='bg-light-gray-200 w-fit p-1 rounded-half cursor-pointer' onClick={onDeleteProduct}>
                                <BiX size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
