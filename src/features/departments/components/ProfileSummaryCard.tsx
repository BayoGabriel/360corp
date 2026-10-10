import type { EmployeeProfile } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface ProfileSummaryCardProps {
  profile: EmployeeProfile
}

export function ProfileSummaryCard({ profile }: ProfileSummaryCardProps) {
  return (
    <section className={styles.profileCard} aria-label="Employee summary">
      <div className={styles.profileAvatarWrap}>
        <img
          className={styles.profileAvatar}
          src={profile.avatarSrc}
          alt={`${profile.name} avatar`}
          width="86"
          height="86"
        />
        <span className={styles.uploadBadge} aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 16V6M8 10l4-4 4 4M5 20h14" />
          </svg>
        </span>
      </div>
      <h2 className={styles.profileName}>{profile.name}</h2>
      <p className={styles.profileEmail}>{profile.email}</p>
      <label className={styles.locationToggle}>
        <span className={styles.locationToggleText}>
          {profile.locationToggleLabel}
        </span>
        <input
          type="checkbox"
          className={styles.locationToggleInput}
          defaultChecked
        />
        <span className={styles.switchTrack} aria-hidden="true">
          <span className={styles.switchThumb} />
        </span>
      </label>
      <a className={styles.cvButton} href={profile.cvHref}>
        {profile.cvLabel}
      </a>
    </section>
  )
}
