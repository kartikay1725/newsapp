import React from 'react'
import loading from './loading.gif'

export default function Spinner(){

    return (
      <div className='text-centre'>
        <img src={loading} alt="loading" className='my-3' />
      </div>
    )
  
}
