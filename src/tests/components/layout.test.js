import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { metadata } from '../../app/layout';
import HeaderBasic from '@/components/header/basic';
import LayoutContainer from '@/components/layout/container';
import { CartProvider } from '@/contexts/cart';

describe('LayoutContainer, HeaderBasic, and CartProvider test. And home metadata', () => {
  it('renders the HeaderBasic and LayoutContainer, with the CartProvider', () => {
    render(
      <CartProvider>
        <HeaderBasic />
        <LayoutContainer>Layout test!</LayoutContainer>
      </CartProvider>,
    );

    expect(screen.getByRole('banner')).toBeDefined();
    expect(screen.getByRole('main')).toBeDefined();
    expect(screen.getByText('Layout test!')).toBeDefined();
  });

  it('exports correct metadata', () => {
    expect(metadata.title).toBe('MBST - Zara Challenge');
    expect(metadata.description).toBe('MBST - Zara Challenge, built with Next.js');
  });
});
