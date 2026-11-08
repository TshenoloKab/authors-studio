import { useLayoutEffect } from 'react'
import './About.css'

export default function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section__label">The Person Behind the Pages</span>
          <h1 className="page-hero__title">About</h1>
          <p className="page-hero__lead">Lindie Petterson — author, speaker and storyteller exploring growth, resilience and human connection.</p>
        </div>
      </section>

      <section className="section about-page">
        <div className="container about-page__grid">
          <div className="about-page__media">
            <div className="about-page__image-frame">
              <img src="/author.jpg" alt="Lindie Petterson portrait" className="about-page__image" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="about-page__content">
            <h2 className="section__heading">A Voice for Our Time</h2>
            <p className="section__text">Lindie Petterson is an author, speaker and storyteller whose work explores personal growth, resilience, identity and the power of human connection.</p>
            <p className="section__text">Through her writing and speaking, she encourages readers to reflect, rediscover their potential and approach life with curiosity and courage. Her stories are rooted in authenticity, warmth and a deep appreciation for the beauty of becoming.</p>
            <p className="section__text">Whether on the page or on the stage, Lindie creates space for meaningful conversation — inviting others to see their own lives as stories worth telling.</p>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="section__label">What I Believe</span>
            <h2 className="section__heading">Values & Vision</h2>
          </div>
          <div className="values-grid">
            <article className="value-card">
              <h3>Authenticity</h3>
              <p>Speaking and writing from a place of truth, with honesty and vulnerability.</p>
            </article>
            <article className="value-card">
              <h3>Curiosity</h3>
              <p>Asking better questions to uncover deeper meaning in our lives.</p>
            </article>
            <article className="value-card">
              <h3>Resilience</h3>
              <p>Finding strength in uncertainty and grace in the process of becoming.</p>
            </article>
            <article className="value-card">
              <h3>Connection</h3>
              <p>Creating space for stories that remind us how deeply human we are.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}