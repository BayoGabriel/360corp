import type { QueryRecord } from '../departments-content'
import { QUERY_STATUS_COPY } from '../departments-content'
import { RowActions } from './RowActions'
import styles from './DepartmentsPage.module.css'

interface QueryTableProps {
  basePath: string
  rows: QueryRecord[]
}

export function QueryTable({ basePath, rows }: QueryTableProps) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Query Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Full Name</th>
            <th scope="col">Query Timeline</th>
            <th scope="col">Query Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((record, index) => (
            <tr key={record.id}>
              <td>{String(index + 1).padStart(2, '0')}</td>
              <td>{record.title}</td>
              <td className={styles.descriptionCell}>{record.description}</td>
              <td>
                <img
                  className={styles.tableAvatar}
                  src={record.person.avatarSrc}
                  alt={record.person.name}
                  width="24"
                  height="24"
                />
              </td>
              <td>{record.person.name}</td>
              <td>{record.timeline}</td>
              <td>
                <span
                  className={
                    record.status === 'reply'
                      ? styles.queryStatusReply
                      : styles.queryStatusUnreply
                  }
                >
                  {QUERY_STATUS_COPY[record.status]}
                </span>
              </td>
              <td>
                <RowActions
                  viewHref={`${basePath}/query/${record.id}`}
                  replyHref={`${basePath}/query/${record.id}/reply`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
