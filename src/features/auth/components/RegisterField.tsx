import styles from './RegisterPage.module.css'

interface RegisterFieldProps {
  id: string
  label: string
  name: string
  type?: string
  autoComplete?: string
  placeholder?: string
  fullWidth?: boolean
}

export function RegisterField({
  id,
  label,
  name,
  type = 'text',
  autoComplete = 'off',
  placeholder,
  fullWidth = false,
}: RegisterFieldProps) {
  const fieldClass = fullWidth
    ? `${styles.field} ${styles.fieldFull}`
    : styles.field

  return (
    <div className={fieldClass}>
      <label className={styles.fieldLabel} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        name={name}
        autoComplete={autoComplete}
        required
        placeholder={placeholder}
      />
    </div>
  )
}
