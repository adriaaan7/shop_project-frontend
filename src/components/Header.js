import React from 'react'
import Button from './Button'

const Header = ( {title, toggleAddForm, showAddButton } ) => {


    return (
        <header>
            
            <h1>{title}</h1>
             <Button 
                color = {showAddButton ? 'red' : 'green'}
                text = {showAddButton ? 'Close' : 'Add'}
                onClick = {toggleAddForm}/> 

        </header>
    )
}

export default Header