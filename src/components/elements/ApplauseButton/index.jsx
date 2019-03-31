/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React, { Component } from 'react'
// styled
// import Clap from 'react-clap-button'
import { StyledApplauseButton } from './StyledApplauseButton'

export default class Applause extends Component {
  componentDidMount() {
    // const Clap = require('react-clap-button/lib/index')
    // console.log(Clap)
    // return Clap
  }

  componentWillUnmount() {
    // if (this.Clap) this.Clap.unmount()
  }

  render() {
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
