import Card from "./Components/Card"
import data from "./Data"
import Header from "./Components/Header"

function App() {
  return (
    <>
      {/* <h1>GEN-Z DICTIONARY</h1> */}
      <Header />
      <div className="container">
        <Card className="card" title={data[0].title} meaning={data[0].meaning} use={data[0].use} />
        <Card className="card" title={data[1].title} meaning={data[1].meaning} use={data[1].use} />
        <Card className="card" title={data[2].title} meaning={data[2].meaning} use={data[2].use} />
        <Card className="card" title={data[3].title} meaning={data[3].meaning} use={data[3].use} />
        <Card className="card" title={data[4].title} meaning={data[4].meaning} use={data[4].use} />
        <Card className="card" title={data[5].title} meaning={data[5].meaning} use={data[5].use} />
        <Card className="card" title={data[6].title} meaning={data[6].meaning} use={data[6].use} />
        <Card className="card" title={data[7].title} meaning={data[7].meaning} use={data[7].use} />
        <Card className="card" title={data[8].title} meaning={data[8].meaning} use={data[8].use} />
        <Card className="card" title={data[9].title} meaning={data[9].meaning} use={data[9].use} />
        <Card className="card" title={data[10].title} meaning={data[10].meaning} use={data[10].use} />
        <Card className="card" title={data[11].title} meaning={data[11].meaning} use={data[11].use} />
      </div>
      
    </>
  )
}

export default App