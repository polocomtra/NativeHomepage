import axios from 'axios'
import queryString from 'query-string'

const axiosClient=axios.create({
    baseURL:'https://user.api.meete.co',
    headers:{
        'x-meete-client-type':'iOS',
        'x-meete-client-version':'645',
        'content-type':'application/json'
    },
    paramsSerializer:params=>queryString(params),
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
    return response.data;
    }
    return response;
    }, (error) => {
    // Handle errors
    throw error;
    });

export default axiosClient