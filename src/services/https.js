import axios from 'axios';

export const axiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    'https://prueba-tecnica-api-tienda-moviles.onrender.com',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '87909682e6cd74208f41a6ef39fe4191',
  },
});
