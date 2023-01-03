import React from 'react'

export default function FormProduct() {
  return (
    <div>
      <form onSubmit={handleSubmit} encType ='multipart/form-data'>
        <input
          type='file'
          name='image'
          accept='.png, .jpg, jpeg'
          
         / >
      </form>
    </div>
  )
}
