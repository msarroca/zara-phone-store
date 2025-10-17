'use client'

import Image from 'next/image'

import {useRouter} from 'next/navigation'

import styles from './index.module.css'

const NavigationBack = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <button className={styles.navButton} onClick={() => router.back()}>
        <Image src="/chevron-left.svg" alt="Go back" width={20} height={20} priority />
        <span className={styles.navButtonText}>Back</span>
      </button>
    </nav>
  )
}

NavigationBack.displayName = 'NavigationBack'

export default NavigationBack
