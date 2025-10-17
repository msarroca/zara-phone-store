"use client";

import Link from "next/link";
import Image from "next/image";

import { useCart } from "@/contexts/cart";

import styles from "./index.module.css";

const CartStatus = () => {
  const { cartSize } = useCart();

  const areProductsInCart = cartSize > 0;

  return (
    <Link className={styles.cartLink} href="/cart">
      <div className={styles.cart}>
        <Image
          alt="cart icon"
          height={18}
          priority
          src={areProductsInCart ? "/bag-solid.svg" : "/bag-outline.svg"}
          width={18}
        />
        <span className={styles.counter}>{cartSize?.toString()}</span>
      </div>
    </Link>
  );
};

CartStatus.displayName = "CartStatus";

export default CartStatus;
