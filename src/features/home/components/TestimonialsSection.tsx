import { TESTIMONIALS, TESTIMONIALS_COPY } from '../home-content'
import { TestimonialCard } from './TestimonialCard'
import styles from './HomePage.module.css'

export function TestimonialsSection() {
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.testimonialsInner}>
        <h2 id="testimonials-heading" className={styles.testimonialsTitle}>
          {TESTIMONIALS_COPY.heading}
        </h2>
        <p className={styles.testimonialsSubtitle}>
          {TESTIMONIALS_COPY.subheading}
        </p>
        <ul className={styles.testimonialList}>
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
