import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PanelBuyProduct from '@/components/panel/buyProduct';
import { CartProvider, useCart } from '@/contexts/cart';

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt = '', src, priority: _priority, loader: _loader, ...props }) => (
    <img alt={alt} src={src} {...props} />
  ),
}));

const productFixture = {
  id: 'SMG-S24U',
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  basePrice: 1249,
  colorOptions: [
    {
      id: 'color-black',
      name: 'Titanium Black',
      hexCode: '#000000',
      imageUrl: 'https://example.com/s24-black.webp',
    },
    {
      id: 'color-gray',
      name: 'Titanium Gray',
      hexCode: '#808080',
      imageUrl: 'https://example.com/s24-gray.webp',
    },
  ],
  storageOptions: [
    {
      id: 'storage-256',
      capacity: '256 GB',
      price: 1299,
    },
    {
      id: 'storage-512',
      capacity: '512 GB',
      price: 1399,
    },
  ],
};

const CartDebug = () => {
  const { cartSize, totalPrice } = useCart();

  return (
    <div>
      <span data-testid="cart-size">{`Cart size: ${cartSize}`}</span>
      <span data-testid="cart-total">{`Cart total: ${totalPrice}`}</span>
    </div>
  );
};

describe('PanelBuyProduct and CartProvider integration', () => {
  let user;
  let setItemSpy;

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    user = userEvent.setup();
  });

  afterEach(() => {
    setItemSpy.mockRestore();
  });

  it('enables add to cart after selecting options and persists the cart state', async () => {
    const { container } = render(
      <CartProvider>
        <PanelBuyProduct product={productFixture} />
        <CartDebug />
      </CartProvider>,
    );

    const view = within(container);

    const addButton = view.getByRole('button', { name: /add to cart/i });
    expect(addButton.disabled).toBe(true);
    expect(view.getByTestId('cart-size').textContent).toBe('Cart size: 0');
    expect(view.getByTestId('cart-total').textContent).toBe('Cart total: 0');

    await user.click(view.getByRole('button', { name: '256 GB' }));
    const colorSelector = view.getByText(/Color\. Pick your favourite\./i).closest('div');
    if (!colorSelector) {
      throw new Error('Color selector wrapper not found');
    }
    const colorButtons = within(colorSelector).getAllByRole('button');
    await user.click(colorButtons[0]);

    await waitFor(() => expect(addButton.disabled).toBe(false));

    await user.click(addButton);

    await waitFor(() => expect(view.getByTestId('cart-size').textContent).toBe('Cart size: 1'));
    expect(view.getByTestId('cart-total').textContent).toBe('Cart total: 1299');

    const storedCartRaw = localStorage.getItem('cart');
    expect(setItemSpy).toHaveBeenCalled();
    expect(storedCartRaw).toBeTruthy();

    const storedCart = JSON.parse(storedCartRaw ?? '[]');
    expect(storedCart).toHaveLength(1);
    expect(storedCart[0]).toMatchObject({
      id: productFixture.id,
      model: productFixture.name,
      selectedCapacity: {
        id: 'storage-256',
        price: 1299,
      },
      selectedColor: {
        id: 'color-black',
        name: 'Titanium Black',
      },
    });
  });
});
