import axios from 'axios';
 
const URL=`http://localhost:8000`;

export const getData=async()=>{
    try {
        return await axios.get(`${URL}`);
    } catch (error) {
        console.log(error);
    }

}