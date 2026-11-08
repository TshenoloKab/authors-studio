import { useLayoutEffect, useState } from 'react'
import './Contact.css'

export default function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section__label">Let's Start a Conversation</span>
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__lead">I'd love to hear from you. Get in touch for speaking, books, media or general enquiries.</p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container contact-page__grid">
          <div className="contact-page__info">
            <h2 className="section__heading">Get in Touch</h2>
            <p className="section__text">For speaking engagements, book enquiries, media & interviews, or general correspondence, please use the form or reach out directly.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail__label">Email</div>
                <div className="contact-detail__value">hello@theauthorsstudio.com</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__label">Social</div>
                <div className="contact-detail__value contact-social">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social__link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                    Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="contact-social__link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-6.8-8.4L20 4h-2l-5.2 6.1L9 4H4z"/></svg>
                    Twitter
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-social__link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-page__form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="enquiryType" className="form-label">Enquiry type</label>
                <select id="enquiryType" name="enquiryType" className="form-select" value={formData.enquiryType} onChange={handleChange} required>
                  <option value="">Select an enquiry type</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="book">Book Enquiry</option>
                  <option value="media">Media & Interviews</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-textarea" rows={6} value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}