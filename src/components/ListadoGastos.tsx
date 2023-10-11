import React from 'react'
import Gasto from '../components/Gasto'

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) =>{
  return (
    <div className='listado-gastos contenedor'>
        <h2> {gastos.length?'Gastos':'Aun no hay gastos'}
        </h2> 
        {
          filtro ? gastosFiltrados.map( gasto => (
            <Gasto 
              key   = {gasto.id}
              gasto = {gasto}
              setGastoEditar = {setGastoEditar}
              eliminarGasto = {eliminarGasto}
            />
         )) : gastos.map( gasto => (
          <Gasto 
            key   = {gasto.id}
            gasto = {gasto}
            setGastoEditar = {setGastoEditar}
            eliminarGasto = {eliminarGasto}
          />
       ))
        }
    
    </div>
  )
}
export default ListadoGastos