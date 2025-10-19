const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://prueba-tecnica-api-tienda-moviles.onrender.com';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? '87909682e6cd74208f41a6ef39fe4191';

export const fetchProducts = async ({ query }) => {
  // 🔹 Construcción segura de los parámetros
  const urlSearchParams = new URLSearchParams();

  if (query !== undefined) urlSearchParams.append('search', query);

  const apiUrl = `${BASE_URL}/products?${urlSearchParams.toString()}`;

  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    cache: 'no-store',
  });

  if (res.status !== 200) {
    throw new Error('Product not found');
  }

  const products = await res.json();

  return products;
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
