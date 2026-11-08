import type { ProjectVariant } from '../data/projects'

type ProjectVisualProps = {
  variant: ProjectVariant
  className?: string
}

function KgetsiVisual() {
  return (
    <div className="pv pv--kgetsi" aria-hidden="true">
      <div className="pv-kgetsi__nav">
        <strong>KGETSI</strong>
        <span>New in</span>
        <span>Bags</span>
        <span>Accessories</span>
        <span className="pv-kgetsi__bag">Bag · 2</span>
      </div>
      <div className="pv-kgetsi__hero">
        <div className="pv-kgetsi__copy">
          <span className="pv-kgetsi__eyebrow">The new collection</span>
          <h4>Everyday pieces,<br />made to be noticed.</h4>
          <p>Considered fashion and accessories for modern living.</p>
          <span className="pv-kgetsi__button">Shop the collection</span>
        </div>
        <div className="pv-kgetsi__image">
          <span className="pv-kgetsi__shape" />
          <span className="pv-kgetsi__caption">Kgetsi / 04</span>
        </div>
      </div>
      <div className="pv-kgetsi__row">
        <span>Handbags</span>
        <span>Jewellery</span>
        <span>Scarves</span>
      </div>
    </div>
  )
}

function LenCleanVisual() {
  return (
    <div className="pv pv--lenclean" aria-hidden="true">
      <div className="pv-lenclean__nav">
        <strong>LENCLEAN</strong>
        <span>Services</span>
        <span>About</span>
        <span className="pv-lenclean__cta">Get a quote</span>
      </div>
      <div className="pv-lenclean__hero">
        <div className="pv-lenclean__copy">
          <span className="pv-lenclean__eyebrow">Professional cleaning</span>
          <h4>A spotless space,<br />without the stress.</h4>
          <p>Reliable home, office and deep-cleaning services tailored to your schedule.</p>
          <span className="pv-lenclean__button">Request a quote</span>
        </div>
        <div className="pv-lenclean__visual">
          <span className="pv-lenclean__bubble pv-lenclean__bubble--one" />
          <span className="pv-lenclean__bubble pv-lenclean__bubble--two" />
          <span className="pv-lenclean__card">
            <span className="pv-lenclean__card-title">Home cleaning</span>
            <span className="pv-lenclean__card-line" />
            <span className="pv-lenclean__card-line pv-lenclean__card-line--short" />
          </span>
          <span className="pv-lenclean__card pv-lenclean__card--bottom">
            <span className="pv-lenclean__card-title">Office cleaning</span>
            <span className="pv-lenclean__card-line" />
            <span className="pv-lenclean__card-line pv-lenclean__card-line--short" />
          </span>
        </div>
      </div>
      <div className="pv-lenclean__strip">
        <span>Home cleaning</span>
        <span>Office cleaning</span>
        <span>Deep cleaning</span>
      </div>
    </div>
  )
}

function NalediVisual() {
  return (
    <div className="pv pv--naledi" aria-hidden="true">
      <div className="pv-naledi__nav">
        <strong>Naledi Motsamai</strong>
        <span>Books</span>
        <span>Speaking</span>
        <span>Events</span>
        <span className="pv-naledi__cta">Enquire</span>
      </div>
      <div className="pv-naledi__hero">
        <div className="pv-naledi__portrait">
          <span className="pv-naledi__sun" />
          <span className="pv-naledi__figure" />
        </div>
        <div className="pv-naledi__copy">
          <span className="pv-naledi__eyebrow">Author · Speaker · Storyteller</span>
          <h4>Stories that stay<br />with you.</h4>
          <p>Books, conversations and ideas for people building a life with intention.</p>
          <span className="pv-naledi__button">Invite Naledi to speak</span>
        </div>
      </div>
      <div className="pv-naledi__strip">
        <span>Latest book</span>
        <span>Upcoming events</span>
        <span>Speaking topics</span>
      </div>
    </div>
  )
}

function AmaraVisual() {
  return (
    <div className="pv pv--amara" aria-hidden="true">
      <div className="pv-amara__nav">
        <strong>AMARA DUBE</strong>
        <span>Programmes</span>
        <span>Workshops</span>
        <span>About</span>
        <span className="pv-amara__cta">Book a workshop</span>
      </div>
      <div className="pv-amara__hero">
        <div className="pv-amara__copy">
          <span className="pv-amara__eyebrow">Corporate training</span>
          <h4>Better teams start<br />with better learning.</h4>
          <p>Practical programmes for communication, leadership and workplace performance.</p>
          <span className="pv-amara__button">Explore programmes</span>
        </div>
        <div className="pv-amara__panel">
          <span className="pv-amara__panel-label">Featured programme</span>
          <strong>Leading with clarity</strong>
          <span>Leadership · 2 days</span>
          <span className="pv-amara__panel-line" />
          <span>Communication · 1 day</span>
        </div>
      </div>
      <div className="pv-amara__logos">
        <span>Programme design</span>
        <span>Team workshops</span>
        <span>Facilitation</span>
      </div>
    </div>
  )
}

function SethoVisual() {
  return (
    <div className="pv pv--setho" aria-hidden="true">
      <div className="pv-setho__nav">
        <strong>Setho Kitchen</strong>
        <span>Menus</span>
        <span>Catering</span>
        <span>Our story</span>
        <span className="pv-setho__cta">Enquire</span>
      </div>
      <div className="pv-setho__hero">
        <div className="pv-setho__copy">
          <span className="pv-setho__eyebrow">Botswana flavours, shared</span>
          <h4>Food that brings<br />people together.</h4>
          <p>Traditional favourites and thoughtful catering for gatherings of every size.</p>
          <span className="pv-setho__button">View catering menus</span>
        </div>
        <div className="pv-setho__plate">
          <span className="pv-setho__plate-ring" />
          <span className="pv-setho__plate-food" />
          <span className="pv-setho__leaf pv-setho__leaf--one" />
          <span className="pv-setho__leaf pv-setho__leaf--two" />
        </div>
      </div>
      <div className="pv-setho__menu">
        <span>Small plates</span>
        <span>Main dishes</span>
        <span>Catering packages</span>
      </div>
    </div>
  )
}

function ThatoVisual() {
  return (
    <div className="pv pv--thato" aria-hidden="true">
      <div className="pv-thato__nav">
        <strong>Thato Kgosi</strong>
        <span>Work with me</span>
        <span>Services</span>
        <span>Insights</span>
        <span className="pv-thato__cta">Book a conversation</span>
      </div>
      <div className="pv-thato__hero">
        <div className="pv-thato__copy">
          <span className="pv-thato__eyebrow">Consulting & coaching</span>
          <h4>Clarity for the<br />next chapter.</h4>
          <p>Thoughtful support for leaders, founders and teams navigating change.</p>
          <span className="pv-thato__button">Explore services</span>
        </div>
        <div className="pv-thato__portrait">
          <span className="pv-thato__arch" />
          <span className="pv-thato__figure" />
          <span className="pv-thato__note">A calmer way forward.</span>
        </div>
      </div>
      <div className="pv-thato__strip">
        <span>Strategy sessions</span>
        <span>Leadership coaching</span>
        <span>Team conversations</span>
      </div>
    </div>
  )
}

function SyntrixVisual() {
  return (
    <div className="pv pv--syntrix" aria-hidden="true">
      <div className="pv-syntrix__nav">
        <strong>SYNTRIX<span>AI</span></strong>
        <span>Product</span>
        <span>Solutions</span>
        <span>Pricing</span>
        <span className="pv-syntrix__cta">Get started</span>
      </div>
      <div className="pv-syntrix__hero">
        <div className="pv-syntrix__copy">
          <span className="pv-syntrix__eyebrow">AI-powered productivity</span>
          <h4>Work smarter.<br />Move faster.</h4>
          <p>One workspace for the work that matters.</p>
          <span className="pv-syntrix__button">Start free</span>
        </div>
        <div className="pv-syntrix__dashboard">
          <div className="pv-syntrix__sidebar">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="pv-syntrix__main">
            <div className="pv-syntrix__stats">
              <span><b>24</b> Active projects</span>
              <span><b>86%</b> Team focus</span>
            </div>
            <div className="pv-syntrix__chart">
              <span style={{ height: '38%' }} />
              <span style={{ height: '55%' }} />
              <span style={{ height: '44%' }} />
              <span style={{ height: '72%' }} />
              <span style={{ height: '62%' }} />
              <span style={{ height: '88%' }} />
            </div>
            <div className="pv-syntrix__rows">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="pv-syntrix__logos">
        <span>Connected work</span>
        <span>Clear priorities</span>
        <span>Less busywork</span>
      </div>
    </div>
  )
}

function TraxenaVisual() {
  return (
    <div className="pv pv--traxena" aria-hidden="true">
      <div className="pv-traxena__nav">
        <strong>TRAXENA</strong>
        <span>Services</span>
        <span>Work</span>
        <span>About</span>
      </div>
      <div className="pv-traxena__hero">
        <div className="pv-traxena__copy">
          <span className="pv-traxena__eyebrow">Digital solutions</span>
          <h4>Build. Innovate. Grow.</h4>
          <p>Professional websites and practical digital solutions for growing businesses.</p>
          <span className="pv-traxena__button">Discuss a Project</span>
        </div>
        <div className="pv-traxena__preview">
          <span className="pv-traxena__preview-bar" />
          <span className="pv-traxena__preview-card" />
          <span className="pv-traxena__preview-card pv-traxena__preview-card--short" />
          <span className="pv-traxena__preview-line" />
        </div>
      </div>
      <div className="pv-traxena__footer">
        <span>Home</span>
        <span>Services</span>
        <span>Work</span>
        <span>About</span>
      </div>
    </div>
  )
}

export default function ProjectVisual({ variant, className = '' }: ProjectVisualProps) {
  const visuals = {
    traxena: <TraxenaVisual />,
    kgetsi: <KgetsiVisual />,
    lenclean: <LenCleanVisual />,
    naledi: <NalediVisual />,
    amara: <AmaraVisual />,
    setho: <SethoVisual />,
    thato: <ThatoVisual />,
    syntrix: <SyntrixVisual />,
  }

  return <div className={`project-visual ${className}`.trim()}>{visuals[variant]}</div>
}
