import { useId } from 'react'
import styles from './SiteLogo.module.css'

interface SiteLogoProps {
  tone?: 'light' | 'dark'
}

export function SiteLogo({ tone = 'light' }: SiteLogoProps) {
  const gradientId = useId()
  const toneClass = tone === 'dark' ? styles.toneDark : styles.toneLight

  return (
    <a href="/" className={`${styles.logo} ${toneClass}`}>
      <svg
        className={styles.logoMark}
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8ab4e6" />
            <stop offset="100%" stopColor="#4a6fb5" />
          </linearGradient>
        </defs>
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="#2e2c6b"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
        />
        <text
          x="19"
          y="25.5"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="13"
          fontWeight="700"
        >
          360
        </text>
        <circle
          cx="30.5"
          cy="10"
          r="2.2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
        />
      </svg>
      <span className={styles.logoText}>Corporation</span>
    </a>
  )
}
