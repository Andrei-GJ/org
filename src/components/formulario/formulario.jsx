import CampoTexto from "../CampoTexto/CampoTexto"
import "./formulario.css"
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../boton";

const ManejarEnvio = (e) =>{
    e.preventDefault()
    console.log("hola",e)
}

const Formulario = () => {
    return<section className="formulario">
        <form onSubmit={ManejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="ingrese su " required/>
            <CampoTexto titulo="Puesto" placeholder="ingrese su " required/>
            <CampoTexto titulo="Foto" placeholder="" required/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>;
}

export default Formulario