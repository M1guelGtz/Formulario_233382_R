import { useState } from "react";
import Swal from "sweetalert2";
import { LinkedList } from "../../Data/LinkedList";
import { Proveedor } from "../../Data/Proveedor";
import Button from "../Atoms/Button";
import Title from "../Atoms/Title";
import Field from "../Molecules/Field";
import './Section.css';
import SectionList from "./SectionLista";
function Section (props) {
    const [nombre, setNombre]=useState('')
    const [telefono, setTelefono]=useState('')
    const [direccion, setDireccion]=useState('')
    const [email, setEmail]=useState('')
    const [listaProv, setListaProv]= useState(new LinkedList())

    const handlerClick = () =>{

        const listaActualizada  = new LinkedList()
        let current  = listaProv.getHead()
        let prov = new Proveedor()
        if (nombre != "" && direccion != "" && telefono != null && email != "" ){
            if (telefono.length != 10) {
                Swal.fire({
                    title: 'Numero Telefonico Erroneo',
                    icon: 'warning'
                })
            }else{
                prov.setEmpresa(nombre)
                prov.setDirEmp(direccion)
                prov.setEmailEmp(email)
                prov.setTelefonoEmp(telefono)
                console.log(listaProv)
                listaProv.push(prov)
                while(current){
                    listaActualizada.push(current.getData())
                    current = current.next
                }
                listaActualizada.push(prov)
                setListaProv(listaActualizada)
                Swal.fire({
                    title:`Proveedor ${nombre} Guardado `,
                    text: "Guardado con exito",
                    icon: "success"
                })
            }
        }else{
            Swal.fire({
            title:`Complete todos los campos `,
            text: "error al guardar",
            icon: "warning"
            })
        }
    }
    return (
        <>
            <div id="datos_Empresa">
                <Field type = 'text' placeHolder={props.placeHolder} text='Nombre del proveedor: ' val={nombre} fnVal={setNombre} ></Field>
                <Field type = 'number' placeHolder='Deben ser 10 Digitos' text='Numero Telefonico: ' val={telefono} fnVal={setTelefono}></Field>
                <Field type = 'text' placeHolder='' text='Direccion: ' val={direccion} fnVal={setDireccion}></Field>
                <Field type = 'email' placeHolder='Por Ejemplo: Usuario@gmail.com' text='Correo Electronico: ' val={email} fnVal={setEmail}></Field>
                <Button title='Guardar' onclick={handlerClick}></Button>
            </div>  
                <Title title = 'Lista de Proveedores'></Title>
                <SectionList LinkedList={listaProv}></SectionList>
        </>
        
    )
}

export default Section