import React from 'react'

function Form({interChange}) {
  return (
    <div className='form-overlay'>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control mt-2' id='name' aria-describedby='nameHelp' placeholder='Enter mobile name' />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input type='number' name='price' className='form-control mt-2' id='price' aria-describedby='priceHelp' placeholder='Enter mobile price' />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category:</label>
          <select className='form-control mt-2' name='category' id='category'>
            <option value='-1'></option>
            <option value='Mobiles'>Mobiles</option>
            <option value='Laptops'>Laptops</option>
            <option value="Tv's">Tv's</option>
            <option value='Wifi'>Wifi</option>
          </select>
        </div>

        <button className='btn btn-primary float-end'>Send</button>
        <button className='btn btn-danger float-end' onClick={(e) => {
          e.preventDefault()
          interChange()
        }}>Cancel</button>
      </form>
    </div>
  )
}

export default Form
