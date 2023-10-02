<<<<<<< HEAD
import { useState,useEffect} from 'react'
=======
import { useState, useEffect  } from 'react'
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
import CerraBtn from '../img/cerrar.svg'
import { Mensaje } from './Mensaje'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
<<<<<<< HEAD
  gastoEditar}) =>{
=======
  gastoEditar,
  fecha,
  setGastoEditar
}) =>{
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
    
    const [mensaje,setMensaje] = useState('')
    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState('')
    const [categoria,setCategoria] = useState('')
<<<<<<< HEAD
    const [id,setId] = useState('')
    const [fecha,setFecha] = useState('')

    useEffect(() => {
      if(Object.keys(gastoEditar).length>0){
=======
    const [Fecha,setFecha] = useState('')
    const [id,setId] = useState('')

    useEffect(() => {
      if(Object.keys(gastoEditar).length > 0)
      {
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
        setNombre(gastoEditar.nombre)
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
        setId(gastoEditar.id)
        setFecha(gastoEditar.fecha)
      }
    }, [])
    

    const ocultarModal = ()=>{
<<<<<<< HEAD
      setAnimarModal(false)
      setTimeout(() => {
        setModal(false)
      }, 500);    
=======
        //
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
          setModal(false)
        },500);
        
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
    }  

    const handleSubmit = e =>{
      e.preventDefault();
      if([nombre, cantidad, categoria].includes('')){
        setMensaje('Todos los campos son obligarios')
        setTimeout(()=>{
          setMensaje('')
        },3000)
        return
      }
<<<<<<< HEAD
      guardarGasto({nombre, cantidad, categoria,id, fecha})
=======
      guardarGasto({nombre, cantidad, categoria, id, fecha})
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
      
    }

        return(
            <div className="modal">
                <div className="cerrar-modal">
                    <img
                    alt="Cerrar Modal"
                    src={CerraBtn}
                    onClick={ocultarModal}
                    />
                </div>
                <form 
                onSubmit={handleSubmit}
                className = {`formulario ${animarModal ? "animar":'cerrar'}`}>
<<<<<<< HEAD
                    <legend>{gastoEditar.nombre?"Editar Gasto":"Nuevo Gasto"}</legend>    
=======
                    <legend> {gastoEditar.nombre ? "Editar Gasto ":" Nuevo Gasto"} </legend>    
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}    
                    <div className='campo'>
                        <label htmlFor='nombre'>Nombre Gasto</label>
                        <input
                          id='nombre'
                          type='text'
                          placeholder='Añade el nombre del gasto' 
                          value={nombre} 
                          onChange={e=> setNombre(e.target.value)}
                        />
                    </div>

                    <div className='campo'>
                        <label htmlFor='cantidad'>Cantidad</label>
                        <input
                          id='cantidad'
                          type='number'
                          placeholder='Añade la cantidad del gasto ej. 50'  
                          value={cantidad} 
                          onChange={e=> setCantidad(e.target.value)}
                        />
                    </div>

                    <div className='campo'>
                        <label htmlFor='categoria'>Categoría</label>
                        <select 
                            id="categoria"
                            value={categoria} 
                            onChange={e=> setCategoria(e.target.value)}
                        >
                          <option value="">-- Seleccione --</option>
                          <option value="ahorro">Ahorro</option>
                          <option value="comida">Comida</option>
                          <option value="casa">Casa</option>
                          <option value="gastos">Gastos Varios</option>
                          <option value="osio">Osio</option>
                          <option value="salud">Salud</option>
                          <option value="suscripciones">Suscripciones</option>
                        </select>
                    </div>
                    <input type='submit' 
<<<<<<< HEAD
                    value={gastoEditar.nombre?"Guardar Cambios":"Añadir Gasto"}
=======
                    value={gastoEditar.nombre ? "Guardar Cambios ":"Añadir gasto"}
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
                    />

                </form>
            </div>
        )
}

export default Modal;

