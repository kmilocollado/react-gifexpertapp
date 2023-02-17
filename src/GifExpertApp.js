import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Superman'])

    return (
        <>

            <h2>Gif Expert App</h2>
            <CategoryAdd setCategories={ setCategories }/>
                     <hr></hr>

            <ol>
                {
                    categories.map( (category) => 
                        <GifGrid 
                            key={category} 
                            category={ category }
                        />
                    )
                }
            </ol>
            
        </>
    )

}

export default GifExpertApp