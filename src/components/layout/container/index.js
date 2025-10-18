import styles from './index.module.css'

const LayoutContainer = ({children}) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  )
}

LayoutContainer.displayName = 'LayoutContainer'

export default LayoutContainer
