import Image from 'next/image'

import {useCart} from '@/contexts/cart'

import styles from './index.module.css'
import ButtonBasic, {buttonBasicColors, buttonBasicDesigns} from '@/components/button/basic'

const CardCartItem = ({id, model, selectedCapacity, selectedColor}) => {
  const {removeFromCart} = useCart()

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={selectedColor.imageUrl}
          alt={`${model} ${selectedCapacity.capacity} ${selectedColor.name} image`}
          width={384}
          height={384}
          priority
        />
      </div>
      <div className={styles.info}>
        <span>{model}</span>
        <span className={styles.infoCapacityAndColor}>{`${selectedCapacity.capacity} | ${selectedColor.name}`}</span>
        <span className={styles.infoPrice}>{selectedCapacity.price} EUR</span>
        <div className={styles.button}>
          <ButtonBasic
            color={buttonBasicColors.ERROR}
            design={buttonBasicDesigns.SIMPLE}
            onClick={() => removeFromCart({id, model, selectedCapacity, selectedColor})}
          >
            Eliminar
          </ButtonBasic>
        </div>
      </div>
    </article>
  )
}

CardCartItem.displayName = 'CardCartItem'

export default CardCartItem
