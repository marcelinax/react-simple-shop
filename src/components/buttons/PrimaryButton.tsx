import React from 'react';

interface Props {
    title: string;
    type: 'submit' | 'button';
    className?: string;
    children?: JSX.Element;
    onClick: () => void;
}

export const PrimaryButton: React.FC<Props> = ({title,type, className, children, onClick}) => {
    return <button onClick={onClick} type={type} className={`flex  items-center text-white bg-primary rounded-md justify-center hover:scale-95 transition-all cursor-pointer ${className}`}>
        {children}
        <p className='font-semibold'>{title}</p>
    </button>;
};
