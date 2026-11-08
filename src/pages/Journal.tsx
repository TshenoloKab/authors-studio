import { useLayoutEffect } from 'react'
import './Journal.css'

export default function Journal() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const articles = [
    {
      title: 'Learning to Embrace the Unknown',
      date: 'October 2025',
      category: 'Reflections',
      excerpt: "What if uncertainty isn't something to fear, but an invitation to grow?",
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80'
    },
    {
      title: 'Why Every Great Journey Begins with a Question',
      date: 'September 2025',
      category: 'Ideas',
      excerpt: 'Curiosity is the first step towards transformation.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80'
    },
    {
      title: 'Finding Meaning in the Everyday',
      date: 'August 2025',
      category: 'Everyday Life',
      excerpt: 'Beauty and significance often hide in the smallest moments.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'
    },
    {
      title: 'The Art of Slow Living',
      date: 'July 2025',
      category: 'Reflections',
      excerpt: 'In a world that demands speed, choosing to slow down is an act of wisdom.',
      image: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?auto=format&fit=crop&w=1600&q=80'
    },
    {
      title: 'Stories That Shape Us',
      date: 'June 2025',
      category: 'Writing',
      excerpt: 'The stories we tell ourselves have the power to change our lives.',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=1600&q=80'
    },
    {
      title: 'Courage in Small Things',
      date: 'May 2025',
      category: 'Inspiration',
      excerpt: 'Sometimes the bravest thing we can do is simply begin again.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80'
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section__label">Notes, Thoughts & Reflections</span>
          <h1 className="page-hero__title">Journal</h1>
          <p className="page-hero__lead">A space for ideas, observations and stories from the writing life.</p>
        </div>
      </section>

      <section className="section journal-page">
        <div className="container">
          <div className="journal-page-grid">
            {articles.map((article, idx) => (
              <article key={idx} className="journal-page-card">
                <div className="journal-page-card__media">
                  <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                </div>
                <div className="journal-page-card__content">
                  <div className="journal-page-card__meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>
                  <h2 className="journal-page-card__title">{article.title}</h2>
                  <p className="journal-page-card__text">{article.excerpt}</p>
                  <span className="link-underline">Read Article</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}