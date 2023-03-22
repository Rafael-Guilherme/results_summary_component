import '../Results/results.scss'

const Results = () => {
  return (
    <div className="results-chart">
      <h2>Your Result</h2>
      <div className='box-numbers'>
        <p className="box-numbers-two">
          <span className="bigger__number">76</span> <br />
          <span className="small__number">of 100</span>
        </p>
      </div>
      <div className="box-description">
        <h3>Great</h3>
        <p className="description">Your scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default Results