import { fetchProducts } from "@/services/products";

import InputSearch from "@/components/input/search";
import ListCardProduct from "@/components/list/cardProduct";

import styles from "./page.module.css";

const HomePage = async () => {
  const products = await fetchProducts();

  if (Boolean(products)) return <h2>{`Oops! Something went wrong!`}</h2>;

  return (
    <div className={styles.page}>
      <div className={styles.searchWrapper}>
        <InputSearch />
        <span
          className={styles.resultsText}
        >{`${products?.length ?? "0"} results`}</span>
      </div>
      <div>
        <ListCardProduct products={products} />
      </div>
    </div>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
