import './App.css';
import Api from './Api'
import Table from './Table';
import Form from './Form';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    getProducts()
  },[])

  const getProducts = async () => {
    let res = await Api()
    setData(res.data)
  }

  console.log(data)
 
  return (
   <>
    <div className='wrapper'>
      <h2 className='text-primary'>CRUD Operations</h2>
      <button className='btn btn-primary'>Add Product</button>
      <Table data = {data} />
    </div>
   </>
  );
}

export default App;
