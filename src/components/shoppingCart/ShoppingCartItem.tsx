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
        <div className='w-full border-b-2 border-gray-300/70 h-52 py-8 first:border-t-2 '>
            <div className='w-full flex h-full items-center'>
                <div style={{ backgroundImage: `url(${image})` }} className='flex-1 shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover h-full'/>
                <div className='flex-1 ml-4'>
                    <h6 className='text-sm font-semibold'>{name}</h6>
                </div>
                <div className='flex-1'>
                    <div className='bg-light-gray-200 w-fit flex items-center rounded-xl p-1'>
                        <BiMinus className='cursor-pointer' onClick={onDecreaseProductAmount}/>
                        <span className='mx-4 select-none'>{amount}</span>
                        <BiPlus className='cursor-pointer' onClick={onIncreaseProductAmount}/>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='font-semibold'>${price}</p>
                </div>
                <div>
                    <div className='bg-light-gray-200 w-fit p-1 rounded-half cursor-pointer' onClick={onDeleteProduct}>
                        <BiX size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
