import './index.css'

function ScoreCard(props) {
  const {score, onClickPlayAgain} = props
  console.log(score)
  return (
    <div className="score-card-container">
      <div className="score-body">
        <img
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p>Your Score</p>
        <p>{score}</p>
        <button className="play-again" type="button" onClick={onClickPlayAgain}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
