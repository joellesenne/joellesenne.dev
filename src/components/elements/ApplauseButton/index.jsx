/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React, { Component } from 'react'
// styled
// import Clap from 'react-clap-button'
import { StyledApplauseButton } from './StyledApplauseButton'

export default class Applause extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    function clap() {
      const Clap = require('react-clap-button/lib/index')
      return Clap
    }
    console.log(clap())
  }

  componentWillUnmount() {
    // if (this.Clap) this.Clap.unmount()
  }

  render() {
    // const Clap = this.clap()
    return (
      <StyledApplauseButton>
        <div
        /* count={0}
          countTotal={0}
          isClicked={false}
          maxCount={50}
          theme={{
            secondaryColor: '#5f27ae',
          }} */
        />
      </StyledApplauseButton>
    )
  }
}
