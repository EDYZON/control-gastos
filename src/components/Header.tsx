import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';
function Header({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto})
{
  return (
    <div>
         <h1 className="text-white">Planificador de gastos</h1>
         {isValidPresupuesto?(
          <ControlPresupuesto
           gastos = {gastos}
           presupuesto = {presupuesto}
          />
         ):(
          <NuevoPresupuesto 
          presupuesto = {presupuesto} 
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
          />          
         )}

    </div>
  )  
}
export default Header;