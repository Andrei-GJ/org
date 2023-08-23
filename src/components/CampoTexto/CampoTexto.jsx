import "./campotexto.css";

const CampoTexto = (props) =>{
    return<div className="campo-texto">
        <label>{ props.titulo }</label>
        <input placeholder= {`ingrese su ${props.titulo}`} required={props.required}/> 
    </div>;
}

export default CampoTexto