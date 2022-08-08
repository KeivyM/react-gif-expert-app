import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
        if(!categories.includes(value)){
            setCategories((prev)=> [value, ...prev]);
        }
    }

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory onAddCategory={ onAddCategory } />

        {categories.map((category,index) => <GifGrid key={category} category={category}/> )}
    </>
  )
}
