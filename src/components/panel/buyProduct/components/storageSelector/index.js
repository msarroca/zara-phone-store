import styles from './index.module.css'

const StorageSelector = ({onSelect, selectedCapacity, storageOptions = []}) => {
  return (
    <div className={styles.storageSelector}>
      <span className={styles.text}>{`Storage ¿how much space do you need?`}</span>
      <div className={styles.storageButtonGroup}>
        {storageOptions.map(storageOption => {
          const {capacity} = storageOption
          return (
            <button
              className={capacity === selectedCapacity ? styles.storageButtonSelected : styles.storageButton}
              key={capacity}
              onClick={() => onSelect(storageOption)}
            >
              {capacity}
            </button>
          )
        })}
      </div>
    </div>
  )
}

StorageSelector.displayName = 'StorageSelector'

export default StorageSelector
