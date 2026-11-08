import { Link } from 'react-router-dom'
import './Services.css'

const websiteServices = [
  {
    title: 'Business websites',
    text: 'Professional websites that explain what you do, build trust and help potential customers connect with your business.',
  },
  {
    title: 'Landing pages',
    text: 'Focused web pages designed around a specific service, product, offer or campaign, with a clear call to action.',
  },
  {
    title: 'Website redesigns',
    text: 'Refresh an existing website to improve its appearance, content presentation and customer experience.',
  },
  {
    title: 'Enquiry forms & contact links',
    text: 'Convenient contact options that make it easier for customers to ask questions and enquire about your services.',
  },
  {
    title: 'Basic on-page SEO',
    text: 'Well-structured pages, appropriate headings and page titles to help search engines understand your website.',
  },
  {
    title: 'Deployment & launch assistance',
    text: 'Assistance with publishing your website and checking that everything works correctly before launch.',
  },
]

const digitalServices = [
  {
    title: 'Interactive forms',
    text: 'Customised forms that collect the information your business needs in a clear and organised way.',
  },
  {
    title: 'Booking & appointment features',
    text: 'Practical booking and appointment options where they suit your business workflow.',
  },
  {
    title: 'Simple web applications',
    text: 'Lightweight web-based tools designed to solve specific business problems.',
  },
  {
    title: 'Selected API integrations',
    text: 'Connecting suitable digital services and applications where an integration is practical and adds value.',
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Website Design &amp; Digital Solutions</h1>
          <p className="page-hero__lead">
            We design professional websites and practical digital solutions that help service providers and small businesses look credible, explain their offerings clearly and make it easy for customers to get in touch.
          </p>
        </div>
      </section>

      <section className="section" id="website-design">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">Website Design</p>
            <h2 className="section__title">A professional home for your business</h2>
            <p className="section__lead">
              We create responsive, user-friendly websites that help your business establish a credible online presence. From clear service information to simple enquiry options, each website is planned around your business needs.
            </p>
          </div>
          <div className="grid grid--three">
            {websiteServices.map((item) => (
              <article key={item.title} className="card service-detail">
                <div className="service-detail__content">
                  <h3 className="service-detail__title">{item.title}</h3>
                  <p className="service-detail__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pale" id="digital-solutions">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">Digital Solutions</p>
            <h2 className="section__title">Practical tools when you need more</h2>
            <p className="section__lead">
              Sometimes a website alone isn't enough. We develop focused digital features that help simplify business processes, improve customer interactions and address specific everyday challenges.
            </p>
          </div>
          <div className="grid grid--two">
            {digitalServices.map((item) => (
              <article key={item.title} className="card card--pale service-detail">
                <div className="service-detail__content">
                  <h3 className="service-detail__title">{item.title}</h3>
                  <p className="service-detail__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-panel__copy">
              <h2 className="cta-panel__title">Let's Discuss Your Project</h2>
              <p className="cta-panel__text">
                Have an idea or a business challenge you'd like to address? Let's explore how the right digital solution could help.
              </p>
            </div>
            <div className="cta-panel__action">
              <Link to="/contact" className="btn btn--primary">Get Started →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
