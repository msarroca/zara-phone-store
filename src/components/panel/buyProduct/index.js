'use client'

import {useState} from 'react'

import Image from 'next/image'

import ButtonAddToCart from '@/components/button/addToCart'

import ColorSelector from './components/colorSelector'
import ModelAndPrice from './components/modelAndPrice'
import StorageSelector from './components/storageSelector'

import styles from './index.module.css'

const PanelBuyProduct = ({product}) => {
  const [selectedCapacity, setSelectedCapacity] = useState()
  const [selectedColor, setSelectedColor] = useState()

  const {basePrice, brand, colorOptions, id, name: model, storageOptions} = product

  return (
    <article className={styles.article}>
      <div className={styles.imageWrapper}>
        {colorOptions.map(({imageUrl, name}, index) => {
          const isSelected = selectedColor?.name === name
          const isNotSelectionButItsFirst = !Boolean(selectedColor) && index === 0
          const className = isSelected || isNotSelectionButItsFirst ? styles.imageSelected : styles.image
          return (
            <Image
              className={className}
              key={name}
              src={imageUrl}
              alt={`${brand} ${model} ${name} image`}
              width={384}
              height={384}
              priority
            />
          )
        })}
        <Image
          className={styles.imagePlaceholder}
          src={colorOptions[0].imageUrl}
          alt={`${brand} ${model} image`}
          width={384}
          height={384}
          priority
        />
      </div>
      <div className={styles.buyOptions}>
        <ModelAndPrice basePrice={basePrice} model={model} price={selectedCapacity?.price} />

        <StorageSelector
          onSelect={setSelectedCapacity}
          selectedCapacity={selectedCapacity?.capacity}
          storageOptions={storageOptions}
        />

        <ColorSelector colorOptions={colorOptions} onSelect={setSelectedColor} selectedColor={selectedColor?.name} />

        <ButtonAddToCart model={model} id={id} selectedCapacity={selectedCapacity} selectedColor={selectedColor} />
      </div>
    </article>
  )
}

PanelBuyProduct.displayName = 'PanelBuyProduct'

export default PanelBuyProduct
