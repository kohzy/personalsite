import React from "react"
import P5Wrapper from 'react-p5-wrapper'
import sketch from './p5sketch'

const InterestScroll = () => (
  <div className="scroll-canvas">
    <P5Wrapper sketch={sketch} />
  </div>
)

export default InterestScroll