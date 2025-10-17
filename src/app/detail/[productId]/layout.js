import NavigationBack from "@/components/navigation/back";

const DetailPageLayout = ({ children }) => {
  return (
    <>
      <NavigationBack />
      {children}
    </>
  );
};

export default DetailPageLayout;

export const generateMetadata = async ({ params }) => {
  const { productId } = await params;

  return {
    title: `${productId} - MBST - Zara Challenge`,
    description: `${productId} - MBST - Zara Challenge, built with Next.js`,
  };
};
