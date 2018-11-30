import React from 'react'
import './app.scss'
import ErrorModal from './ErrorModal'
import ShootingStars from './ShootingStars'

const App = () => {
  return (
    <div className='card-container'>
      <div className='card card__dark'><ErrorModal /></div>
      <div className='card'><ShootingStars /></div>
    </div>
  )
}
export default App