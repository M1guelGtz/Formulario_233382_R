import React from 'react';
import './Section.css';
function SectionList ({LinkedList}) {

    return (
        <div id='Cards_Registro'>
            {
                LinkedList.getHead() ? (
                    <Recurse nodo = {LinkedList.getHead()}></Recurse>
                ) : (
                    <p>--- No hay Proveedores Guardados ---</p>
                )
            }
        </div>
    )
}
function Recurse({nodo}){
    if(!nodo){
        return null
    }
    return(
        <>
            <div id='contenedor_Datos'>
                <span>Nombre de la empresa:{nodo.getData().getEmpresa()}</span>
                <span>Email:{nodo.getData().getEmailEmp()} </span>
                <span>Direccion:  {nodo.getData().getDirEmp()} </span>
                <span>Telefono: {nodo.getData().getTelefonoEmp()} </span>
            </div>
            {nodo.next && <Recurse nodo={nodo.next}></Recurse>}   
        </>
    )
}

export default SectionList