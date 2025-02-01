import axios from "axios";

const url = 'http://localhost:3000/products'

export async function getData(){
   return await axios.get(url)
}

export async function postData(data){
   return await axios.post(url, data, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
}

export async function updateData(id){
   return await axios.put(`${url}/${id}`)
}

export async function deleteData(id){
   return await axios.delete(`${url}/${id}`)
}


