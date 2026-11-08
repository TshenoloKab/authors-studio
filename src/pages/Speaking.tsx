import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './Speaking.css'

export default function Speaking() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section__label">Ideas That Inspire Conversations</span>
          <h1 className="page-hero__title">Speaking & Engagements</h1>
          <p className="page-hero__lead">Thoughtful perspectives, engaging storytelling and meaningful conversations for every stage.</p>
        </div>
      </section>

      <section className="section speaking-intro">
        <div className="container speaking-intro__grid">
          <div className="speaking-intro__content">
            <h2 className="section__heading">Speaking & Engagements</h2>
            <p className="section__text">From intimate gatherings to professional conferences, Lindie brings thoughtful perspectives, engaging storytelling and meaningful conversations to every stage.</p>
            <ul className="speaking-engagement-list">
              <li>Keynote Speaking</li>
              <li>Corporate Events</li>
              <li>Workshops</li>
              <li>Panel Discussions</li>
              <li>Literary Events</li>
            </ul>
          </div>
          <div className="speaking-intro__media">
            <div className="speaking-intro__image-frame">
              <img src="/author.jpg" alt="Lindie Petterson speaking portrait" className="speaking-intro__image" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="section speaking-services">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="section__label">Speaking Topics</span>
            <h2 className="section__heading">How I Can Serve Your Event</h2>
          </div>
          <div className="speaking-services-grid">
            <article className="speaking-service-card">
              <h3>Keynote speaking</h3>
              <p>Inspiring talks tailored to your audience and theme, delivered with warmth and authenticity.</p>
            </article>
            <article className="speaking-service-card">
              <h3>Corporate events</h3>
              <p>Perspectives on growth, resilience and purpose to energize and unite teams.</p>
            </article>
            <article className="speaking-service-card">
              <h3>Workshops</h3>
              <p>Interactive sessions that invite reflection, creativity and meaningful conversation.</p>
            </article>
            <article className="speaking-service-card">
              <h3>Panel discussions</h3>
              <p>Thoughtful contributions that spark dialogue and bring depth to your event.</p>
            </article>
            <article className="speaking-service-card">
              <h3>Literary events</h3>
              <p>Readings, author talks and conversations for festivals, bookstores and book clubs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section speaking-cta">
        <div className="container speaking-cta__inner">
          <span className="section__label section__label--center">Ready to Begin</span>
          <h2 className="section__heading section__heading--center">Invite Lindie to Speak</h2>
          <p className="section__text section__text--center">Tell me about your event and let's create something meaningful together.</p>
          <div className="speaking-cta__actions">
            <Link to="/contact" className="btn btn--primary">Start the Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}