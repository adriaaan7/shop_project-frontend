import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Item = ( item ) => {
    return (
        <div className='item'>

            <h3>
                {item.name}{' '} 
                <FaTimes
                style={{ color: 'red',
                cursor: 'pointer' }}/>
            </h3>
        </div>
    )
}

export default Item
