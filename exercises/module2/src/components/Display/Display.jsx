import React from 'react'
import 'components/Display/Display.css'

const Display = ({ counter }) => {
    return (
      <div className="counter">{counter}</div>
    )
  }

export default Display