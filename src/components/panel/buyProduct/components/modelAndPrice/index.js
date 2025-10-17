import styles from './index.module.css'

const ModelAndPrice = ({basePrice, model, price}) => {
  return (
    <div className={styles.modelAndPrice}>
      <h1 className={styles.model}>{model}</h1>
      <h2 className={styles.price}>{price ? `${price} EUR` : `From ${basePrice} EUR`}</h2>
    </div>
  )
}

ModelAndPrice.displayName = 'ModelAndPrice'

export default ModelAndPrice
