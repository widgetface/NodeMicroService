import React, { useState, useEffect } from 'react'
import { VideoPlayer, PlayList } from './components'

function App() {
  return (
    <div className="App">
      <VideoPlayer active />
      <PlayList />
    </div>
  )
}

export default App
