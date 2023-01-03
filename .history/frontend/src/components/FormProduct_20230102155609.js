import React from 'react'

export default function FormProduct() {
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
          onChange={handleChna}
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
