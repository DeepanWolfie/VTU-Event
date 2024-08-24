
import React from 'react'

const LoginButton = ({value,onClick}) => {
  return (
      <button onClick={onClick}>{ value}</button>
  )
}

export default LoginButton