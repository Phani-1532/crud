import axios from 'axios'

const url = 'http://localhost:4200/products'

async function Api() {
    
   return await axios.get(url)
}

export default Api
