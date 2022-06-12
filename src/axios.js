import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');