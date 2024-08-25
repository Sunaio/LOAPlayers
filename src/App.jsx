import './App.css'
import Cards from './components/regionCard.jsx'

function App() {

  return (
    <>
      <div>
        <h1>LOA Players</h1>
        <p>Interactive Player Database</p>
      </div>
      <h1>Select a region</h1>
      <div className="regionSelect">
        <Cards
          imageURL = "images/deadge.png"
          title = "NA West"
          desc = "Player Data from NA West Region"
        />
        <Cards
          imageURL = "images/thaemine.jpeg"
          title = "NA East"
          desc = "Player Data from NA East Region"
        />
        <Cards
          imageURL = "images/brel.jpg"
          title = "EU Central"
          desc = "Player Data from EU Central Region"
        />
      </div>
    </>
  )
}

export default App
