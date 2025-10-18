import styles from './index.module.css'

const ListSpecs = ({
  brand,
  description,
  screen,
  resolution,
  processor,
  mainCamera,
  name,
  selfieCamera,
  battery,
  os,
  screenRefreshRate
}) => {
  const items = [
    {spec: 'Brand', value: brand},
    {spec: 'Name', value: name},
    {spec: 'Description', value: description},
    {spec: 'Screen', value: screen},
    {spec: 'Resolution', value: resolution},
    {spec: 'Processor', value: processor},
    {spec: 'Main camera', value: mainCamera},
    {spec: 'Selfie camera', value: selfieCamera},
    {spec: 'Battery', value: battery},
    {spec: 'OS', value: os},
    {spec: 'Screen refresh rate', value: screenRefreshRate}
  ]

  return (
    <div>
      <h2 className={styles.listTitle}>Specifications</h2>
      <ul className={styles.list}>
        {items.map(({spec, value}) => {
          return (
            <li className={styles.listItem} key={spec}>
              <h3 className={styles.listItemSpec}>{spec}</h3>
              <span className={styles.listItemValue}>{value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ListSpecs.displayName = 'ListSpecs'

export default ListSpecs
