import { axiosClient } from './https';

export const fetchProducts = async () => {
  try {
    const { data } = await axiosClient.get('/products');
    return data;
  } catch (error) {
    throw new Error('Products not found');
  }
};

export const fetchProductById = async (id) => {
  try {
    const { data } = await axiosClient.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw new Error('Product not found');
  }
};
