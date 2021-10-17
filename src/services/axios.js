import axios from "axios";

const customAxios = axios.create({ baseURL: 'http://localhost:8081' });

export default customAxios;