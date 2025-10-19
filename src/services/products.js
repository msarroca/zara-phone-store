const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://prueba-tecnica-api-tienda-moviles.onrender.com';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? '87909682e6cd74208f41a6ef39fe4191';

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Products not found');
  }

  const data = await res.json();
  return data;
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Product not found');
  }

  const data = await res.json();
  return data;
};
