import React from 'react'
import './app.scss'
import ErrorModal from './ErrorModal'
import ShootingStars from './ShootingStars'

const componentsList = [
  // <ErrorModal />,
  <ShootingStars />
]
const App = () => {
  return (
    <div className='page'>
      { componentsList.map((component, index) => <div className='component' key={index}>{component}</div>) }
    </div>
  )
}
export default App