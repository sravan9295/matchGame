import './index.css'

function Navbar(props) {
  const {score, secondsRemaining} = props

  return (
    <nav className="navbar-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />

      <div className="navbar-right-sec">
        <div className="right-sec">
          <p>Score: </p>
          <p className="score-and-seconds">{score}</p>
        </div>

        <div className="right-sec timer">
          <img
            className="timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-and-seconds">{secondsRemaining} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
