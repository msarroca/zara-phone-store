import Link from 'next/link'
import Image from 'next/image'

import CartStatus from './components/cartStatus'

import styles from './index.module.css'

const HeaderBasic = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src="/mbst-logo.svg" alt="MBST logo" width={74} height={29} priority />
      </Link>
      <CartStatus />
    </header>
  )
}

HeaderBasic.displayName = 'HeaderBasic'

export default HeaderBasic
