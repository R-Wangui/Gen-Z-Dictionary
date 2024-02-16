

function Header() {
  return (
    <>
        
        <div className="navbar">
            <h1>GEN-Z DICTIONARY</h1>
        </div> 
        <div className="searchbar">
            <input type="search" className="search" placeholder="Search" /> 
            <button className="button" >Add New Words</button>  
            {/* <input type="search" className="add" placeholder="Add New Words" /> */}
        </div>
        
        
    </>
  )
}

export default Header
