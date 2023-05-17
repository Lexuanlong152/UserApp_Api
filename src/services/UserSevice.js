import axios from './CustomizeAxios';

const FetchAllUser =(page)=>{
    return axios.get(`api/users?page=${page}`)
    
}

const postCreateUser= (name, job) => {
    return axios.post("api/users", {name, job})
}
export {FetchAllUser , postCreateUser};