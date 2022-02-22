import React from 'react';

type ContentOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
    as?: E;
}

type ContentProps<E extends React.ElementType> = ContentOwnProps<E> & Omit<React.ComponentProps<E>, keyof ContentOwnProps<E>>; 


export const Content = <E extends React.ElementType = 'div'>({ size, color, children, as }: ContentProps<E>) => {
    const Component = as || 'div'
    return <Component className={`${size} ${color}`}>{children}</Component>
}
