import React from 'react'
import './style.scss'
export const Spin: React.FC<any> = () => {
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}