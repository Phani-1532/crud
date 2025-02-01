import './App.css';
import {getData, postData, updateData, deleteData} from './Api';
import Table from './Table';
import Form from './Form';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [form, setForm] = useState(false)

  //for form visibility

  const interChange = () => {
    setForm(!form)
  }

  useEffect(() => {
    getProducts()
  },[])

  const getProducts = async () => {
    let res = await getData()
    setData(res.data)
  }

  const postProducts = async () => {
    let res = await postData()
    getProducts()
  }

  const deleteProducts = async (id) => {
    await deleteData(id)
    getProducts()
  }

  return (
   <>
    <div className='wrapper'>
      <h2 className='text-primary'>CRUD Operations</h2>
      <button className='btn btn-primary' onClick={() => interChange()}>Add Product</button>
      <Table data = {data} deleteProducts = {deleteProducts} />
      {form && <Form interChange = {interChange} />}
    </div>
   </>
  );
}

export default App;
