import React from 'react'
import './shooting-stars.scss'

const NUMBER_STARS = 250

const createStarList = () => {
	let starList = []

	for (let i = 1; i < NUMBER_STARS; i++) {
		starList.push(React.createElement('div', { className: `sky--star sky--star-${i}`, key: i }))
	}
	return starList
}

export default () => (
  <div className="sky">
		{ createStarList() }
    <div className="sky--star__shooting shooting-1"></div>
    <div className="sky--star__shooting shooting-2"></div>
    <div className="sky--star__shooting shooting-3"></div>
  </div>
)
