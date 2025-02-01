import './App.css';
import {getData, deleteData} from './Api';
import Table from './Table';
import Form from './Form';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    getProducts()
  },[])

  const getProducts = async () => {
    let res = await getData()
    setData(res.data)
  }

  const deleteProducts = async (id) => {
    await deleteData(id)
    getProducts()
  }

 
  return (
   <>
    <div className='wrapper'>
      <h2 className='text-primary'>CRUD Operations</h2>
      <button className='btn btn-primary'>Add Product</button>
      <Table data = {data} deleteProducts = {deleteProducts} />
    </div>
   </>
  );
}

export default App;
