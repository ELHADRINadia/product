import React, {useState} from 'react'
import axios from 'axios'

export default function FormProduct() {
const ImageUpload =() =>{
  const [image, setImage] = useState(null)
  const [Name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [qty, setQty] = useState('')

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }
  const handleChnage = (e) => {
    setName(e.target.value)
    setDescription(e.target.value)
    setPrice(e.target.value)
    setQty(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)
    formData.append('Name', Name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('qty', qty)
    axios
      .post('http://localhost:5000/api/products', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
}
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
      </form>
    </div>
  )
}
