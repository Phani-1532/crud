import React, { useState } from 'react'

function Form({ interChange, initializeFormData, postProducts }) {
  const [products, setProducts] = useState(initializeFormData)

  //this function give access to write in input fields
  function changeFormData(e) {
    const { name, value } = e.target
    setProducts({ ...products, [name]: value })
  }
  return (
    <div className='form-overlay'>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' value={products.name} onChange={changeFormData} className='form-control mt-2' id='name' aria-describedby='nameHelp' placeholder='Enter mobile name' />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input type='number' value={products.price} onChange={changeFormData} name='price' className='form-control mt-2' id='price' aria-describedby='priceHelp' placeholder='Enter mobile price' />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category:</label>
          <select placeholder='Select Category' className='form-control mt-2' name='category' id='category' value={products.category} onChange={changeFormData}>
            <option value='-1'>Select Category</option>
            <option value='mobiles'>Mobiles</option>
            <option value='laptops'>Laptops</option>
            <option value="tv's">Tv's</option>
            <option value='wifi'>Wifi</option>
          </select>
        </div>


        <button className='btn btn-primary float-end' onClick={(e) => {
          e.preventDefault()
          postProducts(products)
        }}>Send</button>

        <button className='btn btn-danger float-end' onClick={(e) => {
          e.preventDefault()
          interChange()
        }}>Cancel</button>
      </form>
    </div>
  )
}

export default Form
