import React from 'react'

import Sidebar from './Sidebar'
import Quote from './Quotes/Quote'

import "./Questions.css"

function Questions() {

  

  return (
    <div className='questions' >
        <Sidebar  />
        <Quote />
    </div>
  )
}

export default Questions