import type { FormEvent } from 'react'
import type { FilterSelect } from '../departments-content'
import { RECORDS_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface RecordsToolbarProps {
  filters: FilterSelect[]
  searchId: string
}

export function RecordsToolbar({ filters, searchId }: RecordsToolbarProps) {
  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={styles.recordsToolbar}>
      <div className={styles.filterGroup}>
        {filters.map((filter) => (
          <label key={filter.id} className={styles.filterField}>
            <span className={styles.srOnly}>{filter.label}</span>
            <select
              className={styles.filterSelect}
              name={filter.id}
              aria-label={filter.label}
              defaultValue={filter.options[0]}
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
        <form
          className={styles.recordsSearch}
          role="search"
          onSubmit={onSearchSubmit}
        >
          <label className={styles.srOnly} htmlFor={searchId}>
            {RECORDS_COPY.searchLabel}
          </label>
          <svg
            className={styles.recordsSearchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </svg>
          <input
            id={searchId}
            className={styles.recordsSearchInput}
            type="search"
            name="query"
            placeholder={RECORDS_COPY.searchPlaceholder}
          />
        </form>
      </div>
      <div className={styles.toolbarActions}>
        <button type="button" className={styles.downloadButton}>
          {RECORDS_COPY.downloadLabel}
        </button>
        <button type="button" className={styles.printButton}>
          {RECORDS_COPY.printLabel}
        </button>
      </div>
    </div>
  )
}
