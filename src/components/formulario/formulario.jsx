import CampoTexto from "../CampoTexto/CampoTexto"
import "./formulario.css"

const Formulario = () => {
    return<section className="formulario">
        <form >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="ingrese su "/>
            <CampoTexto titulo="Puesto" placeholder="ingrese su "/>
            <CampoTexto titulo="Foto" placeholder=""/>
        </form>
    </section>;
}

export default Formulario