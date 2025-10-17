import styles from './index.module.css'

import {useCart} from '@/contexts/cart'
import ButtonBasic from '@/components/button/basic'

const ButtonAddToCart = ({id, model, selectedCapacity, selectedColor}) => {
  const {addToCart} = useCart()

  return (
    <div className={styles.buttonWrapper}>
      <ButtonBasic
        disabled={!Boolean(selectedCapacity) || !Boolean(selectedColor)}
        onClick={() => addToCart({id, model, selectedCapacity, selectedColor})}
      >
        Add to cart
      </ButtonBasic>
    </div>
  )
}

ButtonAddToCart.displayName = 'ButtonAddToCart'

export default ButtonAddToCart
