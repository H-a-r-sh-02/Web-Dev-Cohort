import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000" || import.meta.env.VITE_BACKEND_URL,
})

export default instance;