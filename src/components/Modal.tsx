import { useState,useEffect} from 'react'
import CerraBtn from '../img/cerrar.svg'
import { Mensaje } from './Mensaje'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar}) =>{
    
    const [mensaje,setMensaje] = useState('')
    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState('')
    const [categoria,setCategoria] = useState('')
    const [id,setId] = useState('')
    const [fecha,setFecha] = useState('')

    useEffect(() => {
      if(Object.keys(gastoEditar).length>0){
        setNombre(gastoEditar.nombre)
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
        setId(gastoEditar.id)
        setFecha(gastoEditar.fecha)
      }
    }, [])
    

    const ocultarModal = ()=>{
      setAnimarModal(false)
      setTimeout(() => {
        setModal(false)
      }, 500);    
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
      guardarGasto({nombre, cantidad, categoria,id, fecha})
      
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
                    <legend>{gastoEditar.nombre?"Editar Gasto":"Nuevo Gasto"}</legend>    
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
                    value={gastoEditar.nombre?"Guardar Cambios":"Añadir Gasto"}
                    />

                </form>
            </div>
        )
}

export default Modal;

