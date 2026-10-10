import { REQUESTS_COPY, REQUEST_CARDS } from '../departments-content'
import { ModuleLinksPage } from './ModuleLinksPage'

interface RequestsPageProps {
  departmentId: string
}

export function RequestsPage({ departmentId }: RequestsPageProps) {
  const basePath = `/departments/${departmentId}`
  return (
    <ModuleLinksPage
      basePath={basePath}
      backLabel={REQUESTS_COPY.backLabel}
      cards={REQUEST_CARDS.map((card) => ({
        ...card,
        path: `requests/${card.path}`,
      }))}
      title={REQUESTS_COPY.title}
    />
  )
}
