import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWI3MDg0ODMzYTAwMDUxZjRhODgyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzE1MTM5MCwiZXhwIjoxNjkzNDEwNTkwfQ.7LXnRpF9OFCsKze8QFFkJGexR_cmWpT-uIMVewAWOMI";
export const publicRequest =axios.create({
    baseUrl: BASE_URL,
});
export const userRequest=axios.create({
    baseUrl: BASE_URL,
    header:{
        token:`Bearer ${token}`,
    }
});