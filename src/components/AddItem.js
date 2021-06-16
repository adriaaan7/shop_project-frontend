import React from 'react'
import { useState } from 'react'

const AddItem = () => {

    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState()
    const [itemDescription, setItemDescription] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label className='form-label'>Item name</label>
                <input
                    className='form-input' 
                    type='text' 
                    placeholder='Add item name'
                    value={itemName} 
                    onChange={(e) => {
                    setItemName(e.target.value)
                }}>
                </input>
            </div>
            <div className='form-control'>
                <label className='form-label'>Item description</label>
                <textarea
                    cols="150"
                    rows="30"
                    className='form-input form-textarea-description' 
                    type='text' 
                    placeholder='Add item description'
                    value={itemDescription} 
                    onChange={(e) => {
                    setItemDescription(e.target.value)
                }}>
                </textarea>
            </div>
            <div className='form-control'>
                <label className='form-label'>Item price</label>
                <input
                    className='form-input' 
                    type='text' 
                    placeholder='Add item price'
                    value={itemPrice} 
                    onChange={(e) => {
                    setItemPrice(e.target.value)
                }}>
                </input>

            
            </div>

            <input type='submit' value='Add item'
                        className='btn btn-block'/>
        </form>
    )
}

export default AddItem
