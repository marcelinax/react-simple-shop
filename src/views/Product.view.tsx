import React, { useEffect, useState } from 'react';

import { BiCartAlt } from 'react-icons/bi';
import { DefaultLayout } from '../layouts/Default.layout';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { Spinner } from '../components/global/Spinner';
import { addProductToShoppingCart } from '../store/shoppingCartSlice';
import { locales } from './../Locales';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';

export const ProductView: React.FC = () => {

    const { slug } = useParams();
    const dispatch = useDispatch();
    const { loading, product } = useProduct(slug || '');

    const renderCategories = (): JSX.Element | JSX.Element[] => {
        return product.categories && product.categories.map(category => (
            <div className='bg-secondary px-4 py-1 rounded-md m-1 first:ml-0 last:mr-0' key={category.id}>
                <p className='text-white text-sm'>{category.name}</p>
            </div>
        ));
    };

    const onAddProductToCart = async (): Promise<void> => {
        await dispatch(addProductToShoppingCart(product));
        toast.success(locales.product_added_to_the_cart);
    };

    const renderProduct = (): JSX.Element => {
        return product && (
            <>
                <div style={{ backgroundImage: `url(${product.image})` }} className='w-full h-96 md:h-auto md:basis-1/2 shadow-lg md:rounded-md bg-no-repeat bg-center bg-cover' />
                <div className='flex flex-col w-full mt-5 md:basis-1/2 md:ml-16 px-4 md:px-0'>
                    <h1 className='text-3xl md:text-5xl w-full md:w-2/3 leading-snug'>{product.name}</h1>
                    <div className='w-full flex flex-wrap mt-3 md:mt-0'>
                        {renderCategories()}
                    </div>
                    <div className='px-5 py-3 bg-light-gray-100 w-fit mt-5 rounded-md '>
                        <p className='font-semibold md:text-xl text-primary '>${product.price}</p>
                    </div>
                    <div className='w-full mt-6 md:mt-5'>
                        <p>{product.description}</p>
                    </div>
                    <div className='mt-8 mb-8 md:mb-0'>
                        <PrimaryButton onClick={onAddProductToCart} title={locales.add_to_cart} type='button' className='py-5 px-8 w-full sm:w-auto'>
                            {<BiCartAlt size={22} className='mr-3' />}
                        </PrimaryButton>
                    </div>
                </div>
            </>
        );
    };

    return (
        <DefaultLayout>
            <div className='container mx-auto flex flex-col md:flex-row my-10 md:my-20'>
                { loading ? <Spinner/> : renderProduct() }
            </div>
        </DefaultLayout>
    );
};
