import axios from "axios";

const axiosAuth = () => {

    const token = localStorage.getItem('jwt')
    return axios.create({
        baseURL: 'https://be.citrics.io/api',
        headers: {
            authorization: token
        }
    })
}

export default axiosAuth;