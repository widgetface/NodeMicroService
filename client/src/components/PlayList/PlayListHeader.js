import React from 'react'
import { StyledPlayListHeader, StyledPlayListCounter } from '../../styles'

const PlayListHeader = ({ active = 0, total = 0 }) => (
  <StyledPlayListHeader>
    <p>{active.title}</p>
    <StyledPlayListCounter>
      {active.num} / {total}
    </StyledPlayListCounter>
  </StyledPlayListHeader>
)

export default PlayListHeader
