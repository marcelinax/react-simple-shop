import { BiCartAlt } from 'react-icons/bi';
import { DefaultLayout } from '../layouts/Default.layout';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import React from 'react';
import { locales } from './../Locales';

export const ProductView: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='container mx-auto flex my-20'>
                <div style={{ backgroundImage: 'url(https://i.picsum.photos/id/672/640/480.jpg?hmac=Qh6HFl-tBzGwlPPjrHmcNfk7DJCnPEwD7ErC7fFxiM0)' }} className='basis-1/2 shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover' />
                <div className='flex flex-col basis-1/2 ml-16'>
                    <h1 className='text-5xl w-2/3 leading-snug'>Incredible Frozen Salad</h1>
                    <p className='text-secondary font-semibold text-lg mt-2'>COMMODI</p>
                    <div className='px-5 py-3 bg-light-gray-100 w-fit mt-5 rounded-md '>
                        <p className='font-semibold text-xl text-primary '>$123</p>
                    </div>
                    <div className='w-full mt-5'>
                        <p>Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support</p>
                    </div>
                    <div className='mt-8'>
                        <PrimaryButton title={locales.add_to_cart} type='button' className='py-5 px-8'>
                            {<BiCartAlt size={22} className='mr-3'/>}
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};
