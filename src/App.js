import './App.css';
import Api from './Api'
import Table from './Table';
import Form from './Form';
import { useEffect } from 'react';

function App() {

  useEffect(
    () => {
      getProducts()
    }
  )

  let  getProducts = async  () => {
    let res = await Api()
    console.log(res)
  }
  
  return (
    <></>
  );
}

export default App;
