import React from 'react'
import 'components/Button/Button.css'

const Button = ({ onClick, text, delta }) => (
    <button className="btn" onClick={onClick} data-delta={delta}>
      {text}
    </button>
  )

export default Button