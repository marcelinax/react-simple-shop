import { DefaultLayout } from '../layouts/Default.layout';
import { ProductItem } from '../components/products/ProductItem';
import React from 'react';
import { Spinner } from '../components/global/Spinner';
import useCategories from '../hooks/useCategories';
import useProducts from './../hooks/useProducts';

export const HomepageView: React.FC = () => {

    const { loading: loadingCategories, categories } = useCategories();
    const { loading: loadingProducts, products } = useProducts();


    const renderProducts = (): JSX.Element | JSX.Element[] => {
        return products && products.map(product => (
            <ProductItem key={product.id} description={product.description} id={product.id} categories={product.categories} image={product.image} name={product.name} price={product.price} slug={product.slug}/>
        ));
    };

    return (
        <DefaultLayout>
            <div className='container mx-auto flex flex-wrap my-32'>
                {(loadingCategories || loadingProducts) ? <Spinner/> : renderProducts()}
            </div>
        </DefaultLayout>
    );
};
