import { ICategory } from './ICategory';

export interface IProduct {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: string;
    categories: ICategory[];
    description: string;
}