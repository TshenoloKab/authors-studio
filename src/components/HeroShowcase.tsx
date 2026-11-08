import BrowserFrame from './BrowserFrame'
import ProjectVisual from './ProjectVisual'
import './HeroShowcase.css'

export default function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-label="Selected website and digital product concept previews">
      <div className="hero-showcase__main">
        <BrowserFrame label="naledimotsamai.com">
          <ProjectVisual variant="naledi" />
        </BrowserFrame>
      </div>
      <div className="hero-showcase__secondary">
        <BrowserFrame label="syntrix.ai">
          <ProjectVisual variant="syntrix" />
        </BrowserFrame>
      </div>
      <div className="hero-showcase__note">
        <span className="hero-showcase__dot" aria-hidden="true" />
        Concept previews — designed by Traxena Digital
      </div>
    </div>
  )
}
