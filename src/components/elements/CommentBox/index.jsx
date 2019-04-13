import React, { Component } from 'react'
import commentBox from 'commentbox.io'

// styled
import { StyledCommentBox } from './Styled'

export default class CommentBox extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox('5715695484534784-proj', {
      textColor: '#d1d1e4',
    })
  }

  componentWillUnmount() {
    this.removeCommentBox()
  }

  render() {
    return (
      <StyledCommentBox>
        <div className="commentbox" />
      </StyledCommentBox>
    )
  }
}
