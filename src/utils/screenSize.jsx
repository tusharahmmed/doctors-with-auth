const size = {
  mobileL: '700px',
  tablate: '800px',
  pad: '900px',
  laptop: '1200px',
  desktop: '1920px'
}

export const device = {
  desktop: `(max-width: ${size.desktop})`,
  laptop: `(max-width: ${size.laptop})`,
  pad: `(max-width: ${size.pad})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobileL})`,
};