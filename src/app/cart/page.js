'use client'

import {useCart} from '@/contexts/cart'

import ButtonBasic, {buttonBasicDesigns, buttonBasicTypes} from '@/components/button/basic'
import ListCardCartItem from '@/components/list/cardCartItem'

import styles from './cartPage.module.css'

const CartPage = () => {
  const {cartSize, totalPrice} = useCart()

  const areProductsInCart = cartSize > 0

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart}>
        <h1 className={styles.counter}>Cart ({cartSize.toString()})</h1>
        <ListCardCartItem />
      </div>

      {areProductsInCart ? (
        <div className={styles.fullCart}>
          <div className={styles.total}>
            <span>Total</span> <span>{`${totalPrice} EUR`}</span>
          </div>
          <div className={styles.continueShopping}>
            <ButtonBasic href="/" design={buttonBasicDesigns.OUTLINE} type={buttonBasicTypes.LINK}>
              Continue shopping
            </ButtonBasic>
          </div>
          <div className={styles.pay}>
            <ButtonBasic>Pay</ButtonBasic>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <ButtonBasic href="/" design={buttonBasicDesigns.OUTLINE} type={buttonBasicTypes.LINK}>
            Continue shopping
          </ButtonBasic>
        </div>
      )}
    </div>
  )
}

CartPage.displayName = 'CartPage'

export default CartPage
