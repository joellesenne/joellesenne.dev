import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SVG = styled.svg`
  stroke: ${props => props.stroke};
  stroke-width: ${props => props.strokeWidth};
  fill: ${props => props.fill};
  width: ${props => props.width};
  height: ${props => props.height};
  transform: translateY(-2px);
`

export const icons = {
  triangle: {
    shape: <path fill="none" stroke="white" d="M14.921,2.27 28.667,25.5 1.175,25.5 z" />,
    viewBox: '0 0 30 35',
  },
  calendar: {
    shape: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    viewBox: '0 0 24 24',
  },
  clock: {
    shape: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    viewBox: '0 0 24 24',
  },
  blobHeader: {
    shape: (
      <g transform="translate(300,300)">
        <path d="M146.7,-56.3C166.6,13.5,143,88.9,83.3,137.6C23.7,186.3,-71.9,208.5,-124.3,170.5C-176.7,132.6,-185.8,34.6,-157.9,-46.3C-130,-127.2,-65,-191.1,-0.8,-190.9C63.4,-190.6,126.8,-126.2,146.7,-56.3Z" />
      </g>
    ),
    viewBox: '0 0 600 600',
  },
  blobProject: {
    shape: (
      <g transform="translate(300,300)">
        <path d="M100,-115.2C144.4,-105.4,205.4,-96,207.9,-71.5C210.5,-47,154.7,-7.4,125.7,28.2C96.7,63.8,94.5,95.4,78,120.5C61.5,145.7,30.8,164.3,-13.5,182.9C-57.8,201.6,-115.6,220.1,-143.7,198.7C-171.7,177.3,-170,116,-163,69.1C-156,22.2,-143.6,-10.2,-139.6,-52.3C-135.5,-94.5,-139.8,-146.4,-117.9,-163.4C-96,-180.5,-48,-162.7,-10.1,-148.8C27.8,-135,55.6,-124.9,100,-115.2Z" />
      </g>
    ),
    viewBox: '0 0 600 600',
  },
  blobBlog: {
    shape: (
      <g transform="translate(300,300)">
        <path d="M141.1,-165.5C160.4,-151.9,138.3,-86.2,148.6,-26.4C158.9,33.3,201.5,87.2,187.2,104.4C172.8,121.6,101.5,102.1,48.5,112.5C-4.6,122.8,-39.2,162.9,-61.6,159.1C-83.9,155.3,-93.9,107.7,-86.8,72.9C-79.8,38.1,-55.7,16.3,-64.6,-25C-73.5,-66.3,-115.5,-127,-110.2,-143C-105,-159.1,-52.5,-130.6,4.2,-135.5C60.9,-140.5,121.7,-179,141.1,-165.5Z" />
      </g>
    ),
    viewBox: '0 0 600 600',
  },
  blobAbout: {
    shape: (
      <g transform="translate(300,300)">
        <path d="M214.4,-32.3C239.9,8.7,196.4,109.5,131,149.8C65.6,190.1,-21.6,169.9,-90,120.9C-158.4,71.9,-208.1,-5.9,-189.9,-36.9C-171.8,-67.8,-85.9,-51.9,4.3,-53.3C94.5,-54.7,188.9,-73.4,214.4,-32.3Z" />
      </g>
    ),
    viewBox: '0 0 600 600',
  },
}

export const wave = {
  waveBlock: {
    shape: (
      <path>
        <animate
          attributeName="d"
          values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
          repeatCount="indefinite"
          dur="30s"
        />
      </path>
    ),
    viewBox: '0 0 800 338.05',
    preserveAspectRatio: 'none',
  },
}

const IconSVG = ({ icon, stroke, strokeWidth, fill, width, height }) => (
  <SVG
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill={fill}
    width={width}
    height={height}
  >
    {icons[icon].shape}
  </SVG>
)

export default IconSVG

IconSVG.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
}

IconSVG.defaultProps = {
  stroke: 'transparent',
  strokeWidth: '4',
  fill: 'none',
  width: '8',
  height: '8',
}
