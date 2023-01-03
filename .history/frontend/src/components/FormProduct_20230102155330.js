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
          onChange={handleName}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          value={description}
          onChange={handleDescription}
      </form>
    </div>
  )
}
