import './globals.css';
import styles from './layout.module.css';

import HeaderBasic from '@/components/header/basic';
import LayoutContainer from '@/components/layout/container';
import { CartProvider } from '@/contexts/cart';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <CartProvider>
          <HeaderBasic />
          <LayoutContainer>{children}</LayoutContainer>
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata = {
  title: 'MBST - Zara Challenge',
  description: 'MBST - Zara Challenge, built with Next.js',
};
