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
                <div style={{ backgroundImage: `url(${product.image})` }} className='basis-1/2 shadow-lg rounded-md bg-no-repeat bg-center bg-cover' /><div className='flex flex-col basis-1/2 ml-16'>
                    <h1 className='text-5xl w-2/3 leading-snug'>{product.name}</h1>
                    <div className='w-full flex flex-wrap'>
                        {renderCategories()}
                    </div>
                    <div className='px-5 py-3 bg-light-gray-100 w-fit mt-5 rounded-md '>
                        <p className='font-semibold text-xl text-primary '>${product.price}</p>
                    </div>
                    <div className='w-full mt-5'>
                        <p>{product.description}</p>
                    </div>
                    <div className='mt-8'>
                        <PrimaryButton onClick={onAddProductToCart} title={locales.add_to_cart} type='button' className='py-5 px-8'>
                            {<BiCartAlt size={22} className='mr-3' />}
                        </PrimaryButton>
                    </div>
                </div>
            </>
        );
    };

    return (
        <DefaultLayout>
            <div className='container mx-auto flex my-20'>
                { loading ? <Spinner/> : renderProduct() }
            </div>
        </DefaultLayout>
    );
};
