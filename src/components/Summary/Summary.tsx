import React from 'react'
import data from '../../data/data.json';
import icon from '../../assets/images/'
import '../Summary/summary.scss'

const Summary = () => {
  return (
    <div className="summary-charts">
      <div className="summary-charts-container">
        <h2 className="summary-title">Summary</h2>
        <div className="status">
          <div className="status-title">
            <img className="status-title-img" src={icon.iconReaction} />
            <p className="reaction">Reaction</p>
          </div>
          <p>
            <span className="number">80 </span>
            <span className="number2">/ 100</span>
          </p>
        </div>
        <div className="status">
          <div className="status-title">
            <img className="status-title-img" src={icon.iconMemory} />
            <p className="memory">Memory</p>
          </div>
          <p>
            <span className="number">92 </span>
            <span className="number2">/ 100</span>
          </p>
        </div>
        <div className="status">
          <div className="status-title">
            <img className="status-title-img" src={icon.iconVerbal} />
            <p className="verbal">Verbal</p>
          </div>
          <p>
            <span className="number">61 </span>
            <span className="number2">/ 100</span>
          </p>
        </div>
        <div className="status">
          <div className="status-title">
            <img className="status-title-img" src={icon.iconVisual} />
            <p className="visual">Visual</p>
          </div>
          <p>
            <span className="number">72 </span>
            <span className="number2">/ 100</span>
          </p>
        </div>
        <button className="summary-button" type="button">Continue</button>
      </div>
    </div>
  )
}

export default Summary