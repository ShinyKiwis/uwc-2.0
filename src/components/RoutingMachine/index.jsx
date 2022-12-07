import L from "leaflet"
import { createControlComponent } from "@react-leaflet/core"
import "leaflet-routing-machine"

const createRoutineMachineLayer = ({dest}) => {
  console.log(dest)
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(10.772093436939588, 106.6578857044717),
      L.latLng(dest[0], dest[1])
    ],
    lineOptions: {
      styles: [{color: "#638aa7",weight: 2}]
    },
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false
  })

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
