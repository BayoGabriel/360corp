import { ANNOUNCEMENT, FEED_POSTS, FEEDS_PAGE_COPY } from '../feeds-content'
import { AnnouncementCard } from './AnnouncementCard'
import { FeedPostCard } from './FeedPostCard'
import { FeedsToolbar } from './FeedsToolbar'
import { PostComposer } from './PostComposer'
import styles from './FeedsPage.module.css'

export function FeedsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.srOnly}>{FEEDS_PAGE_COPY.title}</h1>
      <FeedsToolbar />
      <PostComposer />
      <div className={styles.grid}>
        <div className={styles.postsColumn}>
          {FEED_POSTS.map((post) => (
            <FeedPostCard key={post.id} post={post} />
          ))}
        </div>
        <AnnouncementCard announcement={ANNOUNCEMENT} />
      </div>
    </div>
  )
}
