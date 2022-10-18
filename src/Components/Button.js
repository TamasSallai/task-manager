import React from 'react'

const Button = ({ text, id, onClick, type }) => {
  return (
    <button id={id} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button
