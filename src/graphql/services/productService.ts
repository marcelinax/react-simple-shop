import AllProductsQuery from '../query/AllProductsQuery';
import { IProduct } from './../../models/IProduct';
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
    }
};

export default productService;