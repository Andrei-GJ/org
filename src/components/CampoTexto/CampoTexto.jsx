import "./campotexto.css";


const CampoTexto = (props , name) =>{
    var name = (3 + 3)
    return<div className="campo-texto">
        <label>{ props.titulo }</label>
        <input placeholder= {`ingrese su ${props.titulo}`} /> 
    </div>;
}

export default CampoTexto