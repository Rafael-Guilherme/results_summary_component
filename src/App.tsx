import Results from "./components/Results/Results"
import Summary from "./components/Summary/Summary"
import Credits from "./components/Credits/Credits"
import '../src/app.scss'

function App() {

  return (
    <div className="app">
      <div className="container">
        <Results />
        <Summary />
      </div>
      <Credits />
    </div>
  )
}

export default App
