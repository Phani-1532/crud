import axios from "axios";

const url = 'http://localhost:3000/products'

export async function getData(){
   return await axios.get(url)
}

export async function deleteData(id){
   return await axios.delete(`${url}/${id}`)
}


