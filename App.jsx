
import './App.css'

function App() {
  return(
    <>
      <Text display={"Hey!!"}/>
      <Text display={"Whats up!"}/>
    </>
  )
}

function Text({display}){
  return(
    <p>{display}</p>
  )
}

export default App
