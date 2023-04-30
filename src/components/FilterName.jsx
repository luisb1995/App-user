import "../index.css"

function FilterName({ text, setText }) {
    function handleSubmit(e) {
        e.preventDefault()
    }

  return(
        <div className="contenedor-buscador">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Filtrar:</label>
                <input type="text" id="name" placeholder="name.." value={text} onChange={(event)=>setText(event.target.value)} />
               
            </form>
        </div>
     )
}

export default FilterName;
