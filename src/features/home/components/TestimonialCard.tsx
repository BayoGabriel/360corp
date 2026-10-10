import testimonialAvatar from '../../../assets/testimonialAvatar.svg'
import type { Testimonial } from '../home-content'
import styles from './HomePage.module.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className={styles.testimonialCard}>
      <figcaption className={styles.testimonialAuthor}>
        <img
          className={styles.testimonialAvatar}
          src={testimonialAvatar}
          alt=""
          width="48"
          height="48"
        />
        <span className={styles.testimonialName}>{testimonial.name}</span>
      </figcaption>
      <blockquote className={styles.testimonialQuote}>
        {testimonial.quote}
      </blockquote>
    </figure>
  )
}
