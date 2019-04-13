// Basics
const basics = {
  siteName: 'Joël Lesenne',
  siteDescription: 'Je créé des sites d’expériences web pour vos activités personnelles ou professionnelles...',
  siteLang: 'fr-FR',
}

// MetaData
const meta = {
  siteTitle: basics.siteName,
  siteTitleAlt: basics.siteName,
  siteDescription: basics.siteDescription,
  siteHeadline: basics.siteDescription,
  siteTitleManifest: basics.siteName,
  siteUrl: 'https://joellesenne.xyz',
  siteLogo: '/logo.png',
  siteBanner: '/banner.jpg',
  siteLang: basics.siteLang,
  favicon: 'static/favicon.png',
  author: basics.siteName,
}

// Social
const social = {
  userName: '@joellesenne',
  userSlug: 'joellesenne',
  ogLanguage: basics.siteLang,
}

// Manifest
const manifest = {
  themeColor: '#d4d4f7',
  backgroundColor: '#0e0f4f',
}

// WebSite
const website = {
  pathPrefix: '/',
  blogPostDir: 'blog',
  projectPostDir: 'projects',
  pagesDir: 'pages',
  ...meta,
  ...social,
  ...manifest,
  googleAnalyticsID: 'XX-XXXXXXXX-X',
}
module.exports = website
