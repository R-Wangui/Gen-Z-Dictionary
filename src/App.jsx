import Card from "./Components/Card"
import data from "./Data"
import Header from "./Components/Header"

function App() {
  return (
    <>
      {/* <h1>GEN-Z DICTIONARY</h1> */}
      <Header />
      <div className="container">
        <Card className="card" title={data[0].title} meaning={data[0].meaning} />
        <Card className="card" title={data[1].title} meaning={data[1].meaning} />
        <Card className="card" title={data[2].title} meaning={data[2].meaning} />
        <Card className="card" title={data[3].title} meaning={data[3].meaning} />
        <Card className="card" title={data[4].title} meaning={data[4].meaning} />
        <Card className="card" title={data[5].title} meaning={data[5].meaning} />
        <Card className="card" title={data[6].title} meaning={data[6].meaning} />
        <Card className="card" title={data[7].title} meaning={data[7].meaning} />
        <Card className="card" title={data[8].title} meaning={data[8].meaning} />
        <Card className="card" title={data[9].title} meaning={data[9].meaning} />
        <Card className="card" title={data[10].title} meaning={data[10].meaning} />
        <Card className="card" title={data[11].title} meaning={data[11].meaning} />
      </div>
      
    </>
  )
}

export default App