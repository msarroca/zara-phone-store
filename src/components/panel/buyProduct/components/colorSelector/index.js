import styles from './index.module.css'

const ColorSelector = ({colorOptions = [], onSelect, selectedColor}) => {
  return (
    <div className={styles.colorSelector}>
      <span className={styles.text}>{`Color. Pick your favourite.`}</span>
      <div className={styles.colorButtonGroup}>
        {colorOptions.map(colorOption => {
          const {name, hexCode} = colorOption
          return (
            <button
              className={name === selectedColor ? styles.colorButtonSelected : styles.colorButton}
              key={name}
              onClick={() => onSelect(colorOption)}
            >
              <div className={styles.colorButtonContent} style={{backgroundColor: hexCode}} />
            </button>
          )
        })}
      </div>
      <span className={styles.colorSelected}>{selectedColor ?? ''}</span>
    </div>
  )
}

ColorSelector.displayName = 'ColorSelector'

export default ColorSelector
