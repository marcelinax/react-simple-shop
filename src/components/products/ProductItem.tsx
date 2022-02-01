import {BiCartAlt} from 'react-icons/bi';
import { PrimaryButton } from '../buttons/PrimaryButton';
import React from 'react';
import { locales } from './../../Locales';

export const ProductItem: React.FC = () => {
    return (
        <div className='flex basis-1/4 h-96 flex-col p-4'>
            <div style={{ backgroundImage: 'url(https://i.picsum.photos/id/672/640/480.jpg?hmac=Qh6HFl-tBzGwlPPjrHmcNfk7DJCnPEwD7ErC7fFxiM0)' }} className='shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover w-full h-2/3 hover:opacity-90 transition-all relative'>
                <div className='absolute left-0 bottom-5 py-1 px-6 bg-primary rounded-tr-md rounded-br-md opacity-90'>
                    <span className='text-white text-sm'>COMMODI</span>
                </div>
            </div>
            <div className='w-full flex flex-col '>
                <div className='w-full flex flex-col py-3'>
                    <h2 className='font-semibold text-sm text-secondary'>Incredible Frozen Salad</h2>
                    <p className='text-sm text-zinc-400 font-medium'>$164.00</p>
                </div>
                <PrimaryButton title={locales.add_to_cart} type='button' className='py-2 mt-1'>
                    {<BiCartAlt size={22} className='mr-3'/>}
                </PrimaryButton>
            </div>
        </div>
    );
};
