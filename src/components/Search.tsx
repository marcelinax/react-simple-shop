import { BiSearch } from 'react-icons/bi';
import React from 'react';
import { locales } from './../Locales';

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div className='w-1/3 flex items-center relative pl-3'>
            <input type='text' value={value} onChange={onChange} placeholder={locales.search} className='border border-zinc-200 w-full rounded-md p-2 pr-8 outline-none text-primary'/>
            <BiSearch className='absolute right-2 fill-primary' />
        </div>
    );
};
