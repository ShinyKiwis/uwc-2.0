import React, { useState, useEffect } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet"
import L from "leaflet"
const center = [10.772093436939588, 106.6578857044717]

const Map = () => {
  const [destination ,setDestination] = useState([])
  const mcps = [
    {
      name: "MCP A",
      coordinate: [10.77398052916713, 106.65691232841284],
      location: "123 Ly Thuong Kiet",
      status: "20% full",
      update: "Yesterday, 15:32 by Alex Doe",
      imgSrc: "http://paloca.vn/media/wysiwyg/bai_viet/thieu-thung-rac-nhua-cong-cong-o-khu-vuc-xa-trung-tam.jpeg"
    },
    {
      name: "MCP B",
      coordinate: [10.773016710130442, 106.65782123853157],
      location: "342/21 Ly Thuong Kiet",
      status: "50% full",
      update: "Yesterday, 15:45 by Alex Doe",
      imgSrc: "https://laodongthudo.vn/stores/news_dataimages/kimtien/102019/25/16/4033_72973542_2522815151272705_7440000735363727360_n.jpg"
    },
    {
      name: "MCP C",
      coordinate: [10.770701188188498, 106.65795568008718],
      location: "326 Ly Thuong Kiet",
      status: "100% full",
      update: "Yesterday, 12:45 by John Doe",
      imgSrc: "https://tuongtac.thuathienhue.gov.vn/UploadFiles/PhanAnh/2019/06/582.jpg"
    }
  ]

  const handleChangeRoute = (coordinate) => {
    setDestination([...coordinate])
  }


  function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(10.772093436939588, 106.6578857044717), L.latLng(destination[0], destination[1])],
    lineOptions: {
      styles: [{color: "#638aa7",weight: 4}]
    },
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

  return (
    <div>
      <MapContainer 
        zoom={20}
        center = {center}
        style={{width: '100vw', height: '92vh'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mcps.map(mcp => (
          <Marker position={mcp.coordinate}>
            <Popup>
              <img src={mcp.imgSrc} alt="trash can" width={200}/>
              <ul>
                <li>{mcp.name}</li>
                <li>{mcp.location}</li>
                <li>{mcp.status}</li>
                <li>{mcp.update}</li>
              </ul>
              <button onClick={() => handleChangeRoute(mcp.coordinate)}>Guide</button>
            </Popup>
          </Marker>
        ))}
        <Marker position={center}>
          <Popup>
            <img 
              src="https://new.sim.edu.vn/wp-content/uploads/2021/11/Logo-BK-400.png" 
              alt="bk logo"
              width={200}
              style={{marginLeft: "0.5em"}}
            />
            <br/>
            <span>Back Khoa University of Technology</span>
          </Popup>
        </Marker>
          <Routing />
      </MapContainer>
    </div>
  )
}

export default Map
