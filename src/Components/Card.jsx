// import data from "../Data"

function Card(props) {
  return (
    <>
        <div className="container">
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.meaning}</p>
                <p className="use" >{props.use}</p>
            </div>
        </div>  
    </>
  )
}



export default Card