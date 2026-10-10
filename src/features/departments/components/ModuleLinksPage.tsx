import type { DepartmentModule } from '../departments-content'
import { PageHeader } from './PageHeader'
import { ModuleCard } from './ModuleCard'
import styles from './DepartmentsPage.module.css'

interface ModuleLinksPageProps {
  basePath: string
  backLabel: string
  cards: DepartmentModule[]
  title: string
}

export function ModuleLinksPage({
  basePath,
  backLabel,
  cards,
  title,
}: ModuleLinksPageProps) {
  return (
    <div className={styles.page}>
      <PageHeader title={title} backHref={basePath} backLabel={backLabel} />
      <ul className={styles.cardGrid}>
        {cards.map((card) => (
          <li key={card.id}>
            <ModuleCard
              icon={card.icon}
              href={`${basePath}/${card.path}`}
              label={card.label}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
