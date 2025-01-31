import axios from "axios";

const url = 'http://localhost:3000/products'

async function Api(){
   return await axios.get(url)
}

export default Api