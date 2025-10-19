import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { fetchProductById } from '@/services/products';
import { http, HttpResponse } from 'msw';

const samsungId = 'SMG-S24U';
const noProductId = 'NOKIA-3310';

const fixtureSamsung = {
  id: samsungId,
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  basePrice: 1329,
};

const handlers = [
  http.get(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${samsungId}`, () =>
    HttpResponse.json(fixtureSamsung),
  ),
  http.get(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${noProductId}`,
    () => new HttpResponse({ error: 'NOT-FOUND', message: 'Product not found' }, { status: 404 }),
  ),
];

const server = setupServer(...handlers);

describe('getProductUseCase Test', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should return a product when id exists in database', async () => {
    const product = await fetchProductById(samsungId);
    expect(product).toStrictEqual(fixtureSamsung);
  });

  it('should return an error if product doesnt exist', async () => {
    await expect(fetchProductById(noProductId)).rejects.toThrow('Product not found');
  });
});
