/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import twitter from 'socialshares/dist/icons/twitter'
import facebook from 'socialshares/dist/icons/facebook'
import linkedin from 'socialshares/dist/icons/linkedin'
import more from 'socialshares/dist/icons/more'

// config
import config from '../../../../config/site'

// Styled
import { StyledSocialShares } from './StyledSocialShares'

const TWITTER_USERNAME = config.userSlug

export default class ShareButtons extends Component {
  componentDidMount() {
    // Load socialshares on client side only to prevent SSR issues <https://sunnysingh.io/blog/share-buttons>.
    import('socialshares/dist/socialshares.noicons').then(module => {
      this.socialshares = module.default
      this.socialshares.configure({ icons: { twitter, facebook, linkedin, more } })
      this.socialshares.mount()
    })
  }

  componentWillUnmount() {
    if (this.socialshares) this.socialshares.unmount()
  }

  render() {
    return (
      <StyledSocialShares>
        <div
          className="socialshares"
          data-title={this.props.title}
          data-text={this.props.text}
          data-theme="brand"
          data-size="large"
        >
          <div className="socialshares-twitter" data-via={TWITTER_USERNAME} />
          <div className="socialshares-facebook" />
          <div className="socialshares-linkedin" />
          <div className="socialshares-more" />
        </div>
      </StyledSocialShares>
    )
  }
}
