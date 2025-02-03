import './App.css';
import {getData, postData, updateData, deleteData} from './Api';
import Table from './Table';
import Form from './Form';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [form, setForm] = useState(false)
  const [edit, setEdit] = useState(false)
  const [initializeFormData, setInitializeFormData] = useState({
    name : '',
    price : '',
    category : ''
  })

  //for form visibility

  const interChange = () => {
    setForm(!form)
    setInitializeFormData({
      name : '',
      price : '',
      category : ''
    })
  }

  useEffect(() => {
    getProducts()
  },[])

  const getProducts = async () => {
    let res = await getData()
    setData(res.data)
  }

  const postProducts = async (product) => {
      let data = {
        name : product.name,
        price : product.price,
        category : product.category
      }
    if(edit){
      await updateData(product.id, data)
      setForm(!form)
    }
    else{
      await postData(data)
    getProducts()
    setForm(!form)
    }
    
  }

  const updateProducts = async(data) => {
    setInitializeFormData(data)
    setForm(!form)
    setEdit(true)
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
      <Table data = {data} deleteProducts = {deleteProducts} updateProducts = {updateProducts} />
      {form && <Form interChange = {interChange} initializeFormData = {initializeFormData} postProducts={postProducts} />}
    </div>
   </>
  );
}

export default App;
