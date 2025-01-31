import React from 'react'

function Table({data}) {
  return (
    <table className='table m-3'>
      <thead>
        <tr>
          <th>ID</th>
          <th>mobileName</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map(data => <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td>{data.category}</td>
          <td>
            <button className='btn btn-primary m-1'>Edit</button>
            <button className='btn btn-danger m-1'>Delete</button>
          </td>
        </tr>)}
      </tbody>
    </table>
  )
}

export default Table
