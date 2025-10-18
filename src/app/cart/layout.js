const CartPageLayout = ({ children }) => {
  return children;
};

export default CartPageLayout;

export const generateMetadata = async () => {
  return {
    title: `Cart - MBST - Zara Challenge`,
    description: `Cart - MBST - Zara Challenge, built with Next.js`,
  };
};
