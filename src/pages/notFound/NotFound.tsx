import React from 'react'

const NotFound = () => {
  return (
    <div className='container'>
      <h2 className='text-[80px] max-sm:text-[50px] font-semibold text-center'>Not Found!</h2>
      <p className='text-[50px] font-medium text-center'>404</p>
    </div>
  )
}

export default React.memo(NotFound)
