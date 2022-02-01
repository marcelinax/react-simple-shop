import {BiCartAlt} from 'react-icons/bi';
import { ICategory } from './../../models/ICategory';
import { PrimaryButton } from '../buttons/PrimaryButton';
import React from 'react';
import { locales } from './../../Locales';

interface Props {
    name: string;
    image: string;
    price: string;
    categories: ICategory[];
    slug: string;
}

export const ProductItem: React.FC<Props> = ({ name, image, price, categories, slug }) => {
    
    const renderCategories = (): JSX.Element | JSX.Element[] => {
        return categories && categories.map(category => (
            <span key={category.id} className='text-white text-sm '>{category.name}</span>
        ));
        
    };

    return (
        <div className='flex basis-1/4 h-96 flex-col p-4'>
            <div style={{ backgroundImage: `url(${image})` }} className='shadow-lg rounded-md cursor-pointer bg-no-repeat bg-center bg-cover w-full h-2/3 hover:opacity-90 transition-all relative'>
                <div className='absolute flex flex-col left-0 bottom-5 py-1 px-6 bg-primary rounded-tr-md rounded-br-md opacity-90'>
                    {renderCategories()}
                </div>
            </div>
            <div className='w-full flex flex-col '>
                <div className='w-full flex flex-col py-3'>
                    <h2 className='font-semibold text-sm text-secondary'>{name}</h2>
                    <p className='text-sm text-zinc-400 font-medium'>${price}</p>
                </div>
                <PrimaryButton title={locales.add_to_cart} type='button' className='py-2 mt-1'>
                    {<BiCartAlt size={22} className='mr-3'/>}
                </PrimaryButton>
            </div>
        </div>
    );
};
