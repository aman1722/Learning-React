import React from 'react'

const Button = ({title="ButtonTitle",onClickHandeler, val}) => {
  return (
    <button disabled={val === 0 && title==="-" ? true : false} onClick={onClickHandeler} >{title}</button>
  )
}

export default Button