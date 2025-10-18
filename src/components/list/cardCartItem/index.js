import {useCart} from '@/contexts/cart'

import CardCartItem from '@/components/card/cartItem'

import styles from './index.module.css'

const ListCardCartItem = () => {
  const {cart} = useCart()

  return (
    <ul className={styles.list}>
      {cart.map(({id, model, selectedCapacity, selectedColor}) => (
        <li key={`${id}-${selectedCapacity.capacity}-${selectedColor.name}`}>
          <CardCartItem id={id} model={model} selectedCapacity={selectedCapacity} selectedColor={selectedColor} />
        </li>
      ))}
    </ul>
  )
}

ListCardCartItem.displayName = 'ListCardCartItem'

export default ListCardCartItem
