import React from 'react'
import ErrorModal from './ErrorModal'
import ShootingStars from './ShootingStars'

const App = () => {
  return (
    <div className='page'>
      <ErrorModal />
      <ShootingStars />
    </div>
  )
}
export default App