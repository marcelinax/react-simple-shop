import React, { useState } from 'react';

import { DefaultLayout } from '../layouts/Default.layout';
import { IProduct } from './../models/IProduct';
import { ProductItem } from '../components/products/ProductItem';
import { Search } from '../components/Search';
import { Spinner } from '../components/global/Spinner';
import useCategories from '../hooks/useCategories';
import useProducts from './../hooks/useProducts';

export const HomepageView: React.FC = () => {

    const { loading: loadingCategories, categories } = useCategories();
    const { loading: loadingProducts, products } = useProducts();

    const [search, setSearch] = useState<string>('');

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const searchProductByName = (): IProduct[] => {
        return products && products.filter(product => product.name.toLowerCase().trim().includes(search.toLowerCase().trim()));
    };

    const renderProducts = (): JSX.Element | JSX.Element[] => {
        return searchProductByName().map(product => (
            <ProductItem key={product.id} description={product.description} id={product.id} categories={product.categories} image={product.image} name={product.name} price={product.price} slug={product.slug}/>
        ));
    };

    return (
        <DefaultLayout>
            <div className='container mx-auto flex flex-col mt-24'>
                <div className='mb-5'>
                    <Search value={search} onChange={searchHandler}/>
                </div>
                <div className='w-full flex flex-wrap mb-24'>
                    {(loadingCategories || loadingProducts) ? <Spinner/> : renderProducts()}
                </div>
            </div>
        </DefaultLayout>
    );
};
