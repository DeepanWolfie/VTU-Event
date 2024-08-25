import './LoginButton.css';
import React from 'react'

const LoginButton = ({value,onClick}) => {
  return (
    <button id="button">
      <a href="">{ value}</a>
  </button>
  )
}

export default LoginButton