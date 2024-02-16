import Card from "./Components/Card"
import data from "./Data"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

// created a function which display the properties of the card
// attached it to the card component so it understands what is coming in and going out

function displayCards(card){
  return(
    <Card
      key={card.id}
      title={card.title}
      meaning={card.meaning}
      use={card.use}
    />
  )
}
//the .map method captures data from the data file to display it 
function App() {
  return (
    <>
      <Header />
      <div className= "container">
      {data.map(displayCards)}
      </div>
      

      <Footer />
    </>
  )
}

export default App