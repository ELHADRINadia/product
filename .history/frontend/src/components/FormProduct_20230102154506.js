import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Form() {
  const [Name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [qty, setqty] = useState("");
  const navigate = useNavigate();
  async function AddProduct() {
    try {
      await fetch('api/products/create_product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, description, image, price, qty }),
      }).then((response) => {
        console.log(response);
        if (response.status) {
          navigate("/TableProduct");
        } else {
          toast.error('Add product failed!');
        }
      })

    } catch (error) {
      error(error.response);
    }
  }

  return (
    <div className="h-full bg-gradient-to-tl from-black to-indigo-900 w-full py-16 px-4">
      <form onSubmit={handlesubmit >
        <div className="flex flex-col items-center justify-center">
          <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800" onChange={(e) => setName(e.target.value)}>Name</lable>
              <input aria-label="enter name product" role="input" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
            </div>
            <div className="mt-6  w-full">
              <label htmlFor="message" onChange={(e) => setdescription(e.target.value)}>Description</label>
              <textarea
                id="message"
                name="message"
              />
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800" onChange={(e) => setprice(e.target.value)}>Price</lable>
              <input aria-label="enter name product" role="input" type="number" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
            </div>
            <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800" onChange={(e) => setqty(e.target.value)}>Quantity</lable>
              <input aria-label="enter name product" role="input" type="number" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
            </div>
            <div className="mt-8">
              <button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                Create new product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
