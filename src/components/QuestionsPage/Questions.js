import React from 'react'

import Sidebar from './Sidebar'
import Quote from './Quotes/Quote'

import "./Questions.css"

function Questions() {

  
  // Page for Questions and Answers
  return (
    <div className='questions' >
        <Sidebar  />
        <Quote />
    </div>
  )
}

export default Questions