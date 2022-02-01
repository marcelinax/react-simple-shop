import { DefaultLayout } from '../layouts/Default.layout';
import { ProductItem } from '../components/products/ProductItem';
import React from 'react';

export const HomepageView: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='container mx-auto flex flex-wrap my-32'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </DefaultLayout>
    );
};
