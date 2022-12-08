import React, {useState} from 'react'
import VehicleStyle from "../styles/vehicle.module.css"
import vehicle from "../data/vehicles.json"

const VehicleSummary = ({vehicle}) => {
  console.log(vehicle)
  return (
    <React.Fragment>
      <img src={vehicle.imgSrc} alt="vehicle" /> 
      <div className={VehicleStyle.vehicle_summary}>
        <div>
          <img src="/vehicle_icons/recycling-truck.png" alt="icon"/>
          <span>{vehicle.name}</span>
        </div>
        <div>
          <img src="/vehicle_icons/truck-loading.png" alt="icon"/>
          <span>{vehicle.kg}</span>
        </div>
        <div>
          <img src="/vehicle_icons/kg-measure-weight.png" alt="icon"/>
          <span>{vehicle.tonnage}</span>
        </div>
        <div>
          <img src="/vehicle_icons/gas-station.png" alt="icon"/>
          <span>{vehicle.gas}</span>
        </div>
        <div>
          <img src="/vehicle_icons/seat.png" alt="icon"/>
          <span>{vehicle.seats}</span>
        </div>
      </div>
    </React.Fragment>
  )
}

const Vehicles = () => {
  const [vehicles, setVehicles] = useState(Object.values(vehicle))
  const [idx ,setIdx] = useState(0)
  return (
    <div className={VehicleStyle.container}>
      <h1>Overview vehicle</h1>
      <VehicleSummary vehicle={vehicles[idx]}/>
      <div className={VehicleStyle.buttons}>
        <button onClick={() => setIdx(Math.max(0,idx-1))}>Prev</button>
        <button onClick={() => setIdx(Math.min(1, idx+1))}>Next</button>
      </div>
    </div>
  )
}

export default Vehicles
