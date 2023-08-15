import React from 'react'
import arrow from './arrow.png'



export default function Welcome() {
  return (
    <div >
        <div className='welcome'>
            <div className='contents'>
            <h1>WELCOME</h1>
            <h3>Keep yourself updated with the latest notices of JUET</h3>
        </div>
        <img className='arrow' src={arrow} alt="" />
        </div>
    </div>
  )
}
