const colors = {
  base: {
    color: '#dedede',
    gradientLeft: '#e41b64',
    gradientRight: '#89103c',
    gradientLeftTo: '#fe1605',
    gradientRightButton: '#fea04f',
    bg: '#0800a8',
    white: '#fff',
    black: '#000',
    bgLight: '#0030ef',
  },
  heros: {
    subtitle: {
      color: '#a8dcfe',
    },
  },
  nav: {
    bg: '#0030ef',
  },
  link: {
    gradientRight: '#da8725',
    gradientLeft: '#da1a60',
    border: '#0030ef',
  },
}

const gradient = {
  leftToRight: `linear-gradient(
    -45deg, ${colors.base.gradientLeft} 0%, ${colors.base.gradientRight} 100%
  )`,
  rightToLeft: `linear-gradient(
    45deg, ${colors.base.gradientRight} 0%, ${colors.base.gradientLeft} 100%
  )`,
  link: `linear-gradient(
    to right, ${colors.link.gradientRight} 0%, ${colors.link.gradientLeft} 100%
  )`,
  btn: `linear-gradient(
    45deg, ${colors.link.gradientRight} 0%, ${colors.link.gradientLeft} 100%
  )`,
  bg: `radial-gradient(closest-side ellipse, rgba(15, 14, 22, 0.45), ${colors.base.bgLight})`,
}

const transition = {
  headroom: 'all 0.25s ease-in-out',
  link: 'all 0.35s ease-in-out',
}

const fontFamily = {
  sansSerif: `'Karla', sans-serif`,
  serif: `'Spectral', serif`,
}

const breakpoints = {
  sm: '400px',
  md: '600px',
  lg: '900px',
  xl: '1200px',
  xxl: '1600px',
}

const theme = {
  colors,
  gradient,
  transition,
  fontFamily,
  breakpoints,
  maxWidth: '1200px',
}

export default theme
