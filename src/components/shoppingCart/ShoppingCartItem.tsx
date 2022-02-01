import {BiMinus, BiPlus, BiX} from 'react-icons/bi';

import React from 'react';

export const ShoppingCartItem: React.FC = () => {
    return (
        <div className='w-full border-b-2 border-gray-300/70 h-52 py-8 first:border-t-2 '>
            <div className='w-full flex h-full items-center'>
                <div style={{ backgroundImage: 'url(https://i.picsum.photos/id/672/640/480.jpg?hmac=Qh6HFl-tBzGwlPPjrHmcNfk7DJCnPEwD7ErC7fFxiM0)' }} className='flex-1 shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover h-full'/>
                <div className='flex-1 ml-4'>
                    <h6 className='text-sm font-semibold'>Incredible Frozen Salad</h6>
                </div>
                <div className='flex-1'>
                    <div className='bg-light-gray-200 w-fit flex items-center rounded-xl p-1'>
                        <BiMinus className='cursor-pointer'/>
                        <span className='mx-4 select-none'>1</span>
                        <BiPlus className='cursor-pointer'/>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='font-semibold'>$120</p>
                </div>
                <div>
                    <div className='bg-light-gray-200 w-fit p-1 rounded-half cursor-pointer'>
                        <BiX size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
