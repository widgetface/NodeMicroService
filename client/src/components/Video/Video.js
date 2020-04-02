import React from 'react'
import ReactPlayer from 'react-player'
import { StyledVideoContainer, StyledVideo } from '../../styles'

const Video = ({ autoplay, endCallback, progressCallback }) => (
  <StyledVideo>
    <StyledVideoContainer>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: '0' }}
        url={null}
        playing={autoplay}
        controls={true}
        onEnded={endCallback}
        onProgress={progressCallback}
      />
    </StyledVideoContainer>
  </StyledVideo>
)

export default Video
