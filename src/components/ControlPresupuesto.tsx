import {useEffect, useState} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
const ControlPresupuesto = ({gastos,presupuesto}) => {
   
   const [porcentaje,setPorcentaje] = useState(0)
   const [disponible,setDisponible] = useState(0)
   const [gastado,setGastado] = useState(0)

   useEffect(()=>{
      const totalGastado = gastos.reduce((total,gasto)=> parseInt(gasto.cantidad) + parseInt(total),0)
      const totalDisponible = presupuesto - totalGastado
      
      const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto)*100;
     // console.log(gastos)
      

      setDisponible(totalDisponible)
      setGastado(totalGastado)

      setTimeout(() => {
         setPorcentaje(nuevoPorcentaje)
      }, 1500);
   },[gastos])
    const formatearCantidad = (cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency:'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
         <div>
            <CircularProgressbar 
             value={porcentaje}
            />
         </div>
         <div className='contenido-presupuesto'>
           <p>
              <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
           </p>
           <p>
              <span>Disponible:</span> {formatearCantidad(disponible)}
           </p>
           <p>
              <span>Gastado:</span> {formatearCantidad(gastado)}
           </p>
         </div>

    </div>
  )
}
export default ControlPresupuesto;
