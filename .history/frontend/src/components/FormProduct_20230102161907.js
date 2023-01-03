import React, {useState} from 'react'
import axios from 'axios'

export default function FormProduct() {
const ImageUpload =() =>{
  const [newProduct, setNewPro] =useState(
    {
      image: '',
      Name: '',
      description: '',
      price: '',
      qty: '',
    }
  )
  
}
const handleChange = (e) => {
  setNewPro({ ...newProduct, [e.target.name]: e.target.value });
  }
  const handleImage = (e) => {
    setNewPro({ ...newProduct, image: e.target.files[0] });
  }
  const handleSubmit = (e) => {
    
  return (
    <div>
      <form onSubmit={handleSubmit} encType ='multipart/form-data'>
        <input
          type='file'
          name='image'
          accept='.png, .jpg, jpeg'
          onChange={handleImage}
         />
        <input
          type='text'
          name='Name'
          placeholder='Name'
          value={Name}
          onChange={handleChnage}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          value={description}
          onChange={handleChnage}
        />
        <input
          type='text'
          name='price'
          placeholder='price'
          value={price}
          onChange={handleChange}
        />
        <input
          type='text'
          name='qty'
          placeholder='qty'
          value={qty}
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
