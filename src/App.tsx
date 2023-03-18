import Results from "./components/Results/Results"
import Summary from "./components/Summary/Summary"
import '../src/app.scss'

function App() {

  return (
    <div>
      <div className="container">
        <Results />
        <Summary />
      </div>
    </div>
  )
}

export default App
