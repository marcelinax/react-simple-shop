import {BiCartAlt} from 'react-icons/bi';
import { ICategory } from './../../models/ICategory';
import { IProduct } from './../../models/IProduct';
import { PrimaryButton } from '../buttons/PrimaryButton';
import React from 'react';
import { addProductToShoppingCart } from '../../store/shoppingCartSlice';
import { locales } from './../../Locales';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
    id: string;
    name: string;
    image: string;
    price: string;
    categories: ICategory[];
    slug: string;
    description: string;
}

export const ProductItem: React.FC<Props> = ({ name, image, price, categories, slug, description, id }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const renderCategories = (): JSX.Element | JSX.Element[] => {
        return categories && categories.map(category => (
            <span key={category.id} className='text-white text-sm '>{category.name}</span>
        ));
        
    };

    const navigateToProduct = () => {
        navigate('/product/' + slug);
    };

    const onAddProductToCart = async (product: IProduct): Promise<void> => {
        await dispatch(addProductToShoppingCart(product));
        toast.success(locales.product_added_to_the_cart);
    };

    return (
        <div className='flex w-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-96 flex-col p-4'>
            <div onClick={navigateToProduct} style={{ backgroundImage: `url(${image})` }} className='shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover w-full h-2/3 hover:opacity-90 transition-all relative'>
                <div className='absolute flex flex-col left-0 bottom-5 py-1 px-6 bg-primary rounded-tr-md rounded-br-md opacity-90'>
                    {renderCategories()}
                </div>
            </div>
            <div className='w-full flex flex-col '>
                <div className='w-full flex flex-col py-3'>
                    <h2 className='font-semibold text-sm text-secondary'>{name}</h2>
                    <p className='text-sm text-zinc-400 font-medium'>${price}</p>
                </div>
                <PrimaryButton onClick={() => {
                    onAddProductToCart({
                        id,
                        slug,
                        name,
                        description,
                        image,
                        categories,
                        price
                    });}} title={locales.add_to_cart} type='button' className='py-2 mt-1'>
                    {<BiCartAlt size={22} className='mr-3'/>}
                </PrimaryButton>
            </div>
        </div>
    );
};
