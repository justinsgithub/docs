import React from 'react';

type InputProps = React.ComponentProps<'input'>

export const CustomButton = (props: InputProps) => { 
    return <input {...props}/>
}

