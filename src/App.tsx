import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
//import generarId from './helpers/inde'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto,setIsValidPresupuesto] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastoEditar,setGastoEditar] = useState({})

  const [gastos,setGastos] = useState([])
  
  const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha  = Date.now().toString(36);
    return random * fecha;
  }

  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0)
      {
      console.log('gasto editar tiene algo')
      }
  }, [gastoEditar])
  

  const handleNuevoGasto = ()=>{
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    },500)
  }

  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos,gasto])
    setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
    },500)
    // guardarGasto    = {guardarGasto}
  }

  return (
    <div className={modal?'fijar':''}>
      <Header 
      gastos = {gastos}
      presupuesto    = {presupuesto}
      setPresupuesto = {setPresupuesto}
      isValidPresupuesto    = {isValidPresupuesto}
      setIsValidPresupuesto = {setIsValidPresupuesto}
      />
      {isValidPresupuesto &&(
        <>
        <main>
         <ListadoGastos
           gastos = {gastos} 
           setGastoEditar = {setGastoEditar}
         />
        </main>
        <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto}
            alt='Icono nuevo gasto'
            onClick={handleNuevoGasto}
          />
         </div> 
        </>
      )}

      {modal && <Modal
                  setModal = {setModal}
                  animarModal = {animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto= { guardarGasto }
                  />
      }

       
    </div>
  )
}
export default App
