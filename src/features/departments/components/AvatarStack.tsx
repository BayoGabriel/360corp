import personAvatar from '../../../assets/testimonialAvatar.svg'
import styles from './DepartmentsPage.module.css'

interface AvatarStackProps {
  extraCount: number
}

const PREVIEW_AVATARS = [personAvatar, personAvatar, personAvatar]

export function AvatarStack({ extraCount }: AvatarStackProps) {
  return (
    <div className={styles.avatarStack}>
      {PREVIEW_AVATARS.map((src, index) => (
        <img
          key={index}
          className={styles.stackAvatar}
          src={src}
          alt=""
          width="26"
          height="26"
        />
      ))}
      <span className={styles.stackExtra}>+{extraCount}</span>
    </div>
  )
}
