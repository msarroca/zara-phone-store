'use client'

import {useEffect, useState} from 'react'
import {useSearchParams, useRouter} from 'next/navigation'

import {useDebounce} from '@/hooks/useDebounce'

import styles from './index.module.css'

const InputSearch = () => {
  const params = useSearchParams()
  const router = useRouter()

  const [searchValue, setSearchValue] = useState(params.get('search'))

  const debouncedValue = useDebounce({value: searchValue})

  useEffect(() => {
    if (debouncedValue === undefined || debouncedValue === null) {
      return
    }
    const url = debouncedValue === '' ? '/' : `/?search=${debouncedValue}`
    router.push(url)
  }, [debouncedValue, router])

  useEffect(() => {
    if (Boolean(searchValue) && !params.has('search')) setSearchValue(null)
  }, [params]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleFormSubmit = event => {
    event.preventDefault()
  }

  return (
    <form role="search" onSubmit={handleFormSubmit}>
      <input
        aria-label="Search for a smartphone"
        className={styles.input}
        name="search"
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Search for a smartphone..."
        spellCheck="false"
        type="search"
        value={searchValue ?? ''}
      />
    </form>
  )
}

InputSearch.displayName = 'InputSearch'

export default InputSearch
