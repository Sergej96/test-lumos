import React, { FC, PropsWithChildren } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: FC<PropsWithChildren<InputProps>> = ({
    className = '',
    ...props
}) => {
    return (
        <input
            {...props}
            className={`h-14 w-full rounded-2xl border border-[#646464] px-4 ${className}`}
        />
    );
};
