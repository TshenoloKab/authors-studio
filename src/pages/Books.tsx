import { useLayoutEffect } from 'react'
import './Books.css'

export default function Books() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section__label">Stories Worth Sharing</span>
          <h1 className="page-hero__title">Books</h1>
          <p className="page-hero__lead">A collection of stories and ideas crafted to inspire reflection, courage and possibility.</p>
        </div>
      </section>

      <section className="section books-page">
        <div className="container">
          <div className="books-grid">
            <article className="book-detail">
              <div className="book-detail__media">
                <img src="/art.jpg" alt="The Art of Becoming book cover" className="book-cover book-cover--large" loading="lazy" decoding="async" />
              </div>
              <div className="book-detail__content">
                <h2 className="book-detail__title">The Art of Becoming</h2>
                <p className="book-detail__subtitle">Finding Yourself in a World That Never Stops Changing.</p>
                <p className="book-detail__text">In a world of constant change, becoming who we are meant to be is both a challenge and a gift. This book offers gentle wisdom for navigating transition with grace, curiosity and courage.</p>
                <p className="book-detail__text">It is a companion for those learning to evolve without losing themselves, and for anyone ready to embrace their unfolding story.</p>
                <button className="btn btn--primary">Discover the Book</button>
              </div>
            </article>

            <article className="book-detail book-detail--reverse">
              <div className="book-detail__media">
                <img src="/beyond.jpg" alt="Beyond the Ordinary book cover" className="book-cover book-cover--large" loading="lazy" decoding="async" />
              </div>
              <div className="book-detail__content">
                <h2 className="book-detail__title">Beyond the Ordinary</h2>
                <p className="book-detail__subtitle">A Journey Towards Purpose and Possibility.</p>
                <p className="book-detail__text">An invitation to look beyond expectation and step into a life shaped by intention. Through stories of courage and reflection, this book explores what it means to live a life of meaning.</p>
                <p className="book-detail__text">It speaks to dreamers, doers and anyone daring to believe there is more waiting for them.</p>
                <button className="btn btn--primary">Discover the Book</button>
              </div>
            </article>

            <article className="book-detail">
              <div className="book-detail__media">
                <img src="/quiet.jpg" alt="The Quiet Strength book cover" className="book-cover book-cover--large" loading="lazy" decoding="async" />
              </div>
              <div className="book-detail__content">
                <h2 className="book-detail__title">The Quiet Strength</h2>
                <p className="book-detail__subtitle">Discovering Courage in Life's Uncertain Moments.</p>
                <p className="book-detail__text">Resilience does not always arrive with fanfare. Often, it is found in small acts of faith, patience and perseverance.</p>
                <p className="book-detail__text">A tender, empowering reminder that courage can be quiet, and that is its strength.</p>
                <button className="btn btn--primary">Discover the Book</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}