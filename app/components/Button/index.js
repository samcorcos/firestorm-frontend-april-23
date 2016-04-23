import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={ onClick } styleName={ type }>
      { children }
    </button>
  )
}

export default CSSModules(Button, style)
