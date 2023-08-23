import "./ListaOpciones.css"


const ListaOpciones = () => {
    const Equipos = [
        "Programacion",
        "Front end",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Movil",
        "Inovacion y Gestion"
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {Equipos.map(( Equipos,index) => <option key={index}>{Equipos}</option>)}
        </select>
        
    </div>
}

export default ListaOpciones