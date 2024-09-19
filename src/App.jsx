import {useId, useState} from "react";
import './App.css'

function App() {
    const [animals, setAnimals] = useState(null)
    const [allAnimals, setAllAnimals] = useState(false)
    const handleCat = async () => {
       const response = await  fetch("https://api.thecatapi.com/v1/images/search", {
            headers: {
                x_api_key: "live_OcJFpM16TTMRH1WHQCMlf9jI0AS4v1HEPu3J5ard6ihoaDzOLEGNXyCLPmYsfxRq"
            }
        })
        const data = await response.json()
        setAnimals(data)
    }
    const handleDog = async () => {
        const response = await  fetch("https://api.thedogapi.com/v1/images/search", {
            headers: {
                x_api_key: "live_OcJFpM16TTMRH1WHQCMlf9jI0AS4v1HEPu3J5ard6ihoaDzOLEGNXyCLPmYsfxRq"
            }
        })
        const data = await response.json()
        setAnimals(data)
    }
    const id = useId()
  return (
      <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', width: "100%", height:"100vh", backgroundColor:"EDE8DC", gap:"10px",             backgroundImage: allAnimals?'url("https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif")': 'none', // Replace with your GIF URL
      }}>

          {animals && animals.map((animal) => (
                <img key={id} src={animal?.url} style={{height:"80%"}}/>
          ))}
          <div style={{display: 'flex', gap: "10px"}}>
              <button style={{
                  width: "100px",
                  height: "50px",
                  backgroundColor: "#E7CCCC",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
              }} onClick={handleCat}>random cat
              </button>
              <button style={{
                  width: "100px",
                  height: "50px",
                  backgroundColor: "#A5B68D",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
              }} onClick={handleDog}>random dog
              </button>
              <button style={{width: "100px",
                  height: "50px",
                  backgroundColor: "#A5B68D",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"}} onClick={() => setAllAnimals(true)}>allRandom</button>
          </div>
      </div>
  )
}

export default App

