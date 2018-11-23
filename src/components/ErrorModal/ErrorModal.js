import React from 'react'
import './error-modal.scss'

export default class ErrorModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hide: true
    }
  }

  componentDidMount() {
   setTimeout(() => this.setState({ hide: false }), 500)
  }

  render() {
    return (
      <div className="error-modal-container">
        <div className="error-modal-container--center">
          <div className={this.state.hide ? "error-modal error-modal--out" : "error-modal" }>
            <img src="http://100dayscss.com/codepen/alert.png" alt="Error" />
            <label>Oh Snap!</label>
            <p>An error has occured while creating an error report.</p>
            <button onClick={() => this.setState({ hide: true })}>Dismiss</button>
          </div>
        </div>
      </div>
    )
  }
}