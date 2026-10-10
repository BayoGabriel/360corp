import type { FeedPost } from '../feeds-content'
import { FeedPersonHeader } from './FeedPersonHeader'
import styles from './FeedsPage.module.css'

interface FeedPostCardProps {
  post: FeedPost
}

export function FeedPostCard({ post }: FeedPostCardProps) {
  return (
    <article className={styles.postCard}>
      <FeedPersonHeader person={post.author} meta={post.meta} />
      <p className={styles.postBody}>
        {post.body}{' '}
        <a className={styles.postSeeMore} href={post.seeMoreHref}>
          {post.seeMoreLabel}
        </a>
      </p>
      <div className={styles.postImages}>
        {post.images.map((image) => (
          <img
            key={image.src}
            className={styles.postImage}
            src={image.src}
            alt={image.alt}
            width="560"
            height="380"
          />
        ))}
      </div>
    </article>
  )
}
