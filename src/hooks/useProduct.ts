import { useEffect, useState } from 'react';

import { IProduct } from './../models/IProduct';
import productService from '../graphql/services/productService';

const useProduct = (slug: string) => {
    
    const [product, setProduct] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProduct = async () => {
        setLoading(true);
        const res = await productService.getOneProduct(slug);
        setProduct(res.data.products);
        setLoading(false);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return { loading, product: product[0] ?? null, refetchProduct: fetchProduct };
};

export default useProduct;