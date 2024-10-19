import React from 'react'
import './Discover.css'

function Discover(props) {
  return (
    <>
    <div className='discover-row'>
        <p id='your-text'>{props.title}</p>
        <h1 id='discover-text'>{props.head}</h1>
        <p id='Explore-text'>{props.semi}</p>
    </div>
    </>
  )
}

export default Discover