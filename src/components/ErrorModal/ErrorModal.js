import React from 'react'
import './error-modal.scss'

// $(document).ready(function () {
//   setTimeout(function () {
//     $(".modal").removeClass("out");
//   }, 500);
//   $("button").click(function () {
//     $(this).parent().addClass("out").css("transition", "all 500ms cubic-bezier(0.50, -0.25, 0.60, 0.75) 0s");
//   })
// });

export default class ErrorModal extends React.Component {
  // componentDidMount() {

  // }

  render() {
    return (
      <div className="frame">
        <div className="center">
          <div className="modal out">
            <img src="http://100dayscss.com/codepen/alert.png" alt="Error" />
            <label>Oh Snap!</label>
            <p>An error has occured while creating an error report.</p>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    )
  }
}