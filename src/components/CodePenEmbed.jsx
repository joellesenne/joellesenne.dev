/* eslint-disable import/no-unresolved */
/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// config

import config from 'config/site'

const Iframe = styled.iframe`
  width: 100%;
`

class CodePenEmbed extends Component {
  render() {
    const { id, title, theme, height } = this.props
    return (
      <>
        <Iframe
          height={height}
          scrolling="no"
          title={title}
          src={`//codepen.io/${
            config.userSlug
          }/embed/preview/${id}/?height=${height}&theme-id=${theme}&default-tab=result`}
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
        >
          See the Pen <a href={`https://codepen.io/${config.userSlug}/pen/${id}/`}>{title}</a> {config.siteTitle}{' '}
          <a href={`https://codepen.io/${config.userSlug}`}>{config.userName}</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </Iframe>
      </>
    )
  }
}

CodePenEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.any,
  height: PropTypes.string,
}

CodePenEmbed.defaultProps = {
  theme: '5406',
  height: '400',
}

export default CodePenEmbed
