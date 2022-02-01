import { useEffect, useState } from 'react';

import { IProduct } from './../models/IProduct';
import productService from '../graphql/services/productService';

const useProducts = () => {
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProducts = async () => {
        setLoading(true);
        const res = await productService.getAllProducts();
        setProducts(res.data.products);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { loading, products, refetchProducts: fetchProducts};

};

export default useProducts;