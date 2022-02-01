import AllCategoriesQuery from '../query/AllCategoriesQuery';
import { ICategory } from './../../models/ICategory';
import apolloClient from './../apolloClient';

export interface AllCategoriesDto {
    data: {
        categories: ICategory[];
    };
}

const categoryService = {
    getAllCategories: async (): Promise<AllCategoriesDto> => {
        return await apolloClient.query({
            query: AllCategoriesQuery
        });
    }
};

export default categoryService;