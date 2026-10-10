import { COMPLAINTS_COPY, COMPLAINT_CARDS } from '../departments-content'
import { ModuleLinksPage } from './ModuleLinksPage'

interface ComplaintsPageProps {
  departmentId: string
}

export function ComplaintsPage({ departmentId }: ComplaintsPageProps) {
  const basePath = `/departments/${departmentId}`
  return (
    <ModuleLinksPage
      basePath={basePath}
      backLabel={COMPLAINTS_COPY.backLabel}
      cards={COMPLAINT_CARDS.map((card) => ({
        ...card,
        path: `complaints/${card.path}`,
      }))}
      title={COMPLAINTS_COPY.title}
    />
  )
}
