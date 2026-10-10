import type { FormEvent } from 'react'
import { DASHBOARD_TOPBAR_COPY } from './dashboard-nav'
import { DashboardTopbarActions } from './DashboardTopbarActions'
import styles from './DashboardLayout.module.css'

interface DashboardTopbarProps {
  onMenuClick: () => void
}

export function DashboardTopbar({ onMenuClick }: DashboardTopbarProps) {
  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <header className={styles.topbar}>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={DASHBOARD_TOPBAR_COPY.menuOpenLabel}
        onClick={onMenuClick}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <form className={styles.search} role="search" onSubmit={onSearchSubmit}>
        <label className={styles.srOnly} htmlFor="dashboard-search">
          {DASHBOARD_TOPBAR_COPY.searchLabel}
        </label>
        <svg
          className={styles.searchIcon}
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
          id="dashboard-search"
          className={styles.searchInput}
          type="search"
          name="query"
          placeholder={DASHBOARD_TOPBAR_COPY.searchPlaceholder}
        />
      </form>
      <DashboardTopbarActions />
    </header>
  )
}
