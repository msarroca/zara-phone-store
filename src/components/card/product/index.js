import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.css'

const CardProduct = ({basePrice, brand, id, imageUrl, name}) => {
  return (
    <Link className={styles.link} href="/detail/[id]" as={`/detail/${id}`}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={imageUrl}
            alt={`${brand} ${name} image`}
            width={384}
            height={384}
            priority
          />
        </div>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <h3 className={styles.infoBrand}>{`${brand}`}</h3>
            <h2 className={styles.infoName}>{`${name}`}</h2>
          </div>
          <p className={styles.infoPrice}>{`${basePrice} EUR`}</p>
        </div>
      </article>
    </Link>
  )
}

CardProduct.displayName = 'CardProduct'

export default CardProduct
