import React from 'react';

interface Props {
    title: String;
    type: 'submit' | 'button';
    className?: String;
    children?: JSX.Element;
}

export const PrimaryButton: React.FC<Props> = ({title,type, className, children}) => {
    return <button type={type} className={`flex items-center text-white bg-primary rounded-md justify-center hover:scale-95 transition-all cursor-pointer ${className}`}>
        {children}
        <p className='font-semibold'>{title}</p>
    </button>;
};
