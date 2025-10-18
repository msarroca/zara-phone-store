import { fetchProductById } from '@/services/products';
import ListSpecs from '@/components/list/specs';
import PanelBuyProduct from '@/components/panel/buyProduct';
import SliderCardProduct from '@/components/slider/cardProduct';

import styles from './detailPage.module.css';

const DetailPage = async ({ params }) => {
  const { productId } = await params;

  const product = await fetchProductById(productId);

  const { brand, description, name, similarProducts, specs } = product;

  return (
    <div className={styles.detailWrapper}>
      <PanelBuyProduct product={product} />
      <ListSpecs {...{ brand, description, name, ...specs }} />
      <SliderCardProduct products={similarProducts} />
    </div>
  );
};

DetailPage.displayName = 'DetailPage';

export default DetailPage;
