import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInput = ({target}) => {
        setInputValue( target.value );
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInput}
            />
            <button type='submit' >Agregar</button>
        </ form>
    )
};