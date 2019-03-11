/* eslint-disable import/no-unresolved */
import React from 'react'

// elements
import { BlobHeader, BlobProjects, BlobBlog, BlobAbout } from 'components/elements/Animation'

// components
import SVG from 'components/SVG'

const BlobAnimation = () => (
  <div>
    <BlobHeader>
      <SVG icon="blobHeader" fill="#FF0091" width height />
    </BlobHeader>
    <BlobProjects>
      <SVG icon="blobProject" fill="#ffff33" width height />
    </BlobProjects>
    <BlobBlog>
      <SVG icon="blobBlog" fill="#B7F7D4" width height />
    </BlobBlog>
    <BlobAbout>
      <SVG icon="blobAbout" fill="#0099CC" width height />
    </BlobAbout>
  </div>
)

export default BlobAnimation
