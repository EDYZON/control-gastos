import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
//import generarId from './helpers/inde'

function App() {
  const [gastos,setGastos] = useState([])
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto,setIsValidPresupuesto] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastoEditar,setGastoEditar] = useState({})

<<<<<<< HEAD
  const generarId = () => {
    const random:any = Math.random().toString(36)
    return random;
  }

=======
  const [gastos,setGastos] = useState([])
  
  const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    return random;
  }

  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0)
      {
        handleNuevoGasto();
      }
  }, [gastoEditar])
  

>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
  const handleNuevoGasto = ()=>{
    setModal(true)
    setGastoEditar({})
    setTimeout(()=>{
      setAnimarModal(true)
    },500)
  }



  const guardarGasto = gasto =>{
    if(gasto.id){
<<<<<<< HEAD
      //Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id?gasto:gastoState);
      setGastos(gastosActualizados);
    }else{
      //Nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
=======
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto: gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }else{
      //nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto])
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
    }

    setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
    },500)
<<<<<<< HEAD
=======
  }

  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
  }

  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        setModal(true)
        setTimeout(()=>{
          setAnimarModal(true)
        },500)
      }
  }, [gastoEditar])
  





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
           eliminarGasto = {eliminarGasto}
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
<<<<<<< HEAD
                  gastoEditar={gastoEditar}
=======
                  gastoEditar = { gastoEditar }
                  setGastoEditar = { setGastoEditar }
>>>>>>> fdad82af2f8aa7f35331fadc0119fa9cbb8ece11
                  />
      }

       
    </div>
  )
}
export default App
