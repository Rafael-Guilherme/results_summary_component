import data from '../../data/data.json';
import  '../../assets/images/index'
import '../Summary/summary.scss'

const Summary = () => {
  const myData = data

  return (
    <div className="summary-charts">
      <div className="summary-charts-container">
        <h2 className="summary-title">Summary</h2>
        {myData.map(item => (
          <div className="status" key={item.category}>
            <div className="status-title">
                <img className="status-title-img" src={item.icon} alt={item.category} />
              <p className={`category-${item.category}`}>{item.category}</p>
            </div>
              <p>
                <span className="number">{item.score} </span>
                <span className="number2">/ 100</span>
              </p>
          </div>
        ))}
        
        <button className="summary-button" type="button">Continue</button>
      </div>
    </div>
  )
}
export default Summary