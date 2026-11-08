import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.add('js-reveals')

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return () => root.classList.remove('js-reveals')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove('js-reveals')
    }
  }, [])

  return (
    <>
      <section className="author-hero">
        <div className="container author-hero__grid">
          <div className="author-hero__media">
            <div className="author-hero__image-frame">
              <img
                src="/author.jpg"
                alt="Lindie Petterson, author and storyteller in a contemporary writing studio"
                className="author-hero__image"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div className="author-hero__content" data-reveal>
            <span className="author-hero__label">AUTHOR | SPEAKER | STORYTELLER</span>
            <div className="author-hero__quote-mark">“</div>
            <h1 className="author-hero__title">Words Have the Power to Change Perspectives.</h1>
            <p className="author-hero__lead">
              Through stories, ideas and meaningful conversations, I explore the experiences that shape us, challenge our thinking and inspire us to see the world differently.
            </p>
            <div className="author-hero__actions">
              <Link to="/books" className="btn btn--primary">Explore My Books</Link>
              <Link to="/about" className="btn btn--ghost">Discover My Story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section author-about">
        <div className="container author-about__grid">
          <div className="author-about__media">
            <div className="author-about__image-frame">
              <img
                src="/author.jpg"
                alt="Lindie Petterson portrait"
                className="author-about__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="author-about__content" data-reveal>
            <span className="section__label">The Person Behind the Pages</span>
            <h2 className="section__heading">A Life Written in Stories</h2>
            <p className="section__text">
              Lindie Petterson is an author, speaker and storyteller whose work explores personal growth, resilience, identity and the power of human connection.
            </p>
            <p className="section__text">
              Through her writing and speaking, she encourages readers to reflect, rediscover their potential and approach life with curiosity and courage.
            </p>
            <Link to="/about" className="link-underline">Read My Story</Link>
          </div>
        </div>
      </section>

      <section className="section author-books">
        <div className="container">
          <div className="section__header section__header--center" data-reveal>
            <span className="section__label">Stories Worth Sharing</span>
            <h2 className="section__heading section__heading--large">Featured Books</h2>
          </div>
          <div className="books-showcase">
            <article className="book-card" data-reveal>
              <div className="book-card__media">
                <img src="/art.jpg" alt="The Art of Becoming book cover" className="book-cover" loading="lazy" decoding="async" />
              </div>
              <div className="book-card__content">
                <h3 className="book-card__title">The Art of Becoming</h3>
                <p className="book-card__subtitle">Finding Yourself in a World That Never Stops Changing.</p>
                <p className="book-card__text">A thoughtful exploration of identity and transformation for anyone learning to evolve without losing themselves.</p>
                <Link to="/books" className="btn btn--primary">Discover the Book</Link>
              </div>
            </article>
            <article className="book-card book-card--reverse" data-reveal>
              <div className="book-card__media">
                <img src="/beyond.jpg" alt="Beyond the Ordinary book cover" className="book-cover" loading="lazy" decoding="async" />
              </div>
              <div className="book-card__content">
                <h3 className="book-card__title">Beyond the Ordinary</h3>
                <p className="book-card__subtitle">A Journey Towards Purpose and Possibility.</p>
                <p className="book-card__text">An invitation to look beyond expectation and step into a life shaped by intention. Through stories of courage and reflection, this book explores what it means to live a life of meaning.</p>
                <Link to="/books" className="btn btn--primary">Discover the Book</Link>
              </div>
            </article>
            <article className="book-card" data-reveal>
              <div className="book-card__media">
                <img src="/quiet.jpg" alt="The Quiet Strength book cover" className="book-cover" loading="lazy" decoding="async" />
              </div>
              <div className="book-card__content">
                <h3 className="book-card__title">The Quiet Strength</h3>
                <p className="book-card__subtitle">Discovering Courage in Life's Uncertain Moments.</p>
                <p className="book-card__text">A tender, empowering reminder that resilience often whispers before it roars.</p>
                <Link to="/books" className="btn btn--primary">Discover the Book</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section author-journal">
        <div className="container">
          <div className="section__header" data-reveal>
            <span className="section__label">Notes, Thoughts & Reflections</span>
            <h2 className="section__heading">Latest Journal</h2>
          </div>
          <div className="journal-grid">
            <article className="journal-card" data-reveal>
              <div className="journal-card__media">
                <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80" alt="Learning to embrace the unknown" loading="lazy" decoding="async" />
              </div>
              <div className="journal-card__content">
                <div className="journal-card__meta">
                  <span>October 2025</span>
                  <span>•</span>
                  <span>Reflections</span>
                </div>
                <h3 className="journal-card__title">Learning to Embrace the Unknown</h3>
                <p className="journal-card__text">What if uncertainty isn't something to fear, but an invitation to grow?</p>
                <Link to="/journal" className="link-underline">Read Article</Link>
              </div>
            </article>
            <article className="journal-card" data-reveal>
              <div className="journal-card__media">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80" alt="Why every great journey begins with a question" loading="lazy" decoding="async" />
              </div>
              <div className="journal-card__content">
                <div className="journal-card__meta">
                  <span>September 2025</span>
                  <span>•</span>
                  <span>Ideas</span>
                </div>
                <h3 className="journal-card__title">Why Every Great Journey Begins with a Question</h3>
                <p className="journal-card__text">Curiosity is the first step towards transformation.</p>
                <Link to="/journal" className="link-underline">Read Article</Link>
              </div>
            </article>
            <article className="journal-card" data-reveal>
              <div className="journal-card__media">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" alt="Finding meaning in the everyday" loading="lazy" decoding="async" />
              </div>
              <div className="journal-card__content">
                <div className="journal-card__meta">
                  <span>August 2025</span>
                  <span>•</span>
                  <span>Everyday Life</span>
                </div>
                <h3 className="journal-card__title">Finding Meaning in the Everyday</h3>
                <p className="journal-card__text">Beauty and significance often hide in the smallest moments.</p>
                <Link to="/journal" className="link-underline">Read Article</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section author-speaking">
        <div className="container author-speaking__grid">
          <div className="author-speaking__content" data-reveal>
            <span className="section__label">Ideas That Inspire Conversations</span>
            <h2 className="section__heading">Speaking & Engagements</h2>
            <p className="section__text">
              From intimate gatherings to professional conferences, Lindie brings thoughtful perspectives, engaging storytelling and meaningful conversations to every stage.
            </p>
            <ul className="speaking-list">
              <li>Keynote speaking</li>
              <li>Corporate events</li>
              <li>Workshops</li>
              <li>Panel discussions</li>
              <li>Literary events</li>
            </ul>
            <Link to="/speaking" className="btn btn--primary">Invite Lindie to Speak</Link>
          </div>
          <div className="author-speaking__media">
            <div className="author-speaking__image-frame">
              <img
                src="/author.jpg"
                alt="Lindie Petterson speaking at an event"
                className="author-speaking__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section author-testimonials">
        <div className="container">
          <div className="section__header section__header--center" data-reveal>
            <span className="section__label">Words From Readers</span>
            <h2 className="section__heading">Testimonials</h2>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card" data-reveal>
              <div className="testimonial-card__quote">“</div>
              <p className="testimonial-card__text">Lindie has a rare gift of putting into words what so many of us feel. Her writing is both beautifully lyrical and deeply practical.</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__name">Amelia Hart</div>
                <div className="testimonial-card__role">Reader & Book Club Host</div>
              </div>
            </article>
            <article className="testimonial-card" data-reveal>
              <div className="testimonial-card__quote">“</div>
              <p className="testimonial-card__text">Her keynote left our audience inspired and reflective. Thoughtful, authentic and profoundly moving.</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__name">Daniel Foster</div>
                <div className="testimonial-card__role">Event Director</div>
              </div>
            </article>
            <article className="testimonial-card" data-reveal>
              <div className="testimonial-card__quote">“</div>
              <p className="testimonial-card__text">A powerful voice of wisdom for our time. I return to her words again and again for clarity and courage.</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__name">Sophia Lin</div>
                <div className="testimonial-card__role">Writer & Educator</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section author-newsletter">
        <div className="container author-newsletter__inner" data-reveal>
          <span className="section__label section__label--center">A Little Inspiration, Delivered</span>
          <h2 className="section__heading section__heading--center">Stay Connected</h2>
          <p className="section__text section__text--center">Receive occasional reflections, reading recommendations and updates on new publications.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="newsletter-form__input" placeholder="Your email address" aria-label="Email address" required />
            <button type="submit" className="btn btn--primary">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}