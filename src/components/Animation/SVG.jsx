import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SVG = styled.svg`
  stroke: ${(props) => props.stroke};
  stroke-width: ${(props) => props.strokeWidth};
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translateY(-2px);
`

export const icons = {
  triangle: {
    shape: <path fill="none" stroke="white" d="M14.921,2.27 28.667,25.5 1.175,25.5 z" />,
    viewBox: '0 0 30 35',
  },
  file: {
    shape: (
      <g>
        <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
        <path d="M13 3v6h6" />
      </g>
    ),
    viewBox: '0 0 24 24',
  },
  category: {
    shape: (
      <g>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </g>
    ),
    viewBox: '0 0 24 24',
  },
  calendar: {
    shape: (
      <g>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </g>
    ),
    viewBox: '0 0 24 24',
  },
  clock: {
    shape: (
      <g>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </g>
    ),
    viewBox: '0 0 24 24',
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
