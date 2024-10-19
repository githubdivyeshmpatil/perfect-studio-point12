import React from 'react'
import { Link } from 'react-router-dom'

function AllBg(props) {
  return (
    <>
     <div className="background-container" id='aboutBg'>
      <div className='hed'>
        <h1 id='ab'>{props.hed}</h1>
        <div className='button-container'>
          <Link to='/'  button className='nav-button'>{props.title}</Link>
          <button className='nav-button'>{props.main}</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllBg