import AllProductsQuery from '../query/AllProductsQuery';
import { IProduct } from './../../models/IProduct';
import OneProductQuery from '../query/OneProductQuery';
import apolloClient from './../apolloClient';

export interface AllProductsDto {
    data: {
        products: IProduct[];
    };
}


const productService = {
    getAllProducts: async (): Promise<AllProductsDto> => {
        return await apolloClient.query({
            query: AllProductsQuery
        });
    },
    getOneProduct: async(slug: string): Promise<AllProductsDto> => {
        return await apolloClient.query({
            query: OneProductQuery,
            variables: {
                slug
            }
        });
    }
};


export default productService;