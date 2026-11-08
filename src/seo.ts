const titles: Record<string, string> = {
  '/': 'Lindie Petterson | Author, Speaker & Storyteller',
  '/about': 'About Lindie Petterson | Author & Speaker',
  '/books': 'Books by Lindie Petterson',
  '/journal': 'Journal | Lindie Petterson',
  '/speaking': 'Speaking & Engagements | Lindie Petterson',
  '/contact': 'Contact | Lindie Petterson',
}

const descriptions: Record<string, string> = {
  '/': 'Lindie Petterson is an author, speaker and storyteller sharing stories that inspire and ideas that last.',
  '/about': 'Learn about Lindie Petterson — author, speaker and storyteller exploring growth, resilience and human connection.',
  '/books': 'Explore the books of Lindie Petterson, including The Art of Becoming, Beyond the Ordinary and The Quiet Strength.',
  '/journal': 'Notes, thoughts and reflections from Lindie Petterson on writing, life and meaning.',
  '/speaking': 'Invite Lindie Petterson to speak at your event, conference or gathering.',
  '/contact': 'Get in touch with Lindie Petterson for speaking, books, media or general enquiries.',
}

export function applyPageMeta(pathname: string) {
  const title = titles[pathname] ?? 'Page Not Found | Lindie Petterson'
  const description = descriptions[pathname] ?? 'The requested page could not be found.'

  document.title = title

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) descriptionMeta.setAttribute('content', description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', description)
}