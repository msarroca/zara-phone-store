import { axiosClient } from "./https";

export const fetchProducts = async () => {
  const { data } = await axiosClient.get("/products");
  return data;
};

export const fetchProductById = async (id) => {
  const { data } = await axiosClient.get(`/products/${id}`);
  return data;
};
