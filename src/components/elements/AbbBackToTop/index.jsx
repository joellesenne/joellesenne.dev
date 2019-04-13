/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import { addBackToTop } from 'vanilla-back-to-top'

// theme
// import theme from 'config/theme'

class AddBackToTop extends Component {
  constructor(props) {
    super(props)
    this.state = { addBackToTop: null }
  }

  componentDidMount() {
    const configAddBackToTop = {
      label: 'Different arrow',
      diameter: 40,
      innerHTML:
        '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
      backgroundColor: '#171982',
    }
    this.setState = {
      addBackToTop: addBackToTop(configAddBackToTop),
    }
  }

  render() {
    return <>{this.state.addBackToTop}</>
  }
}

export default AddBackToTop
