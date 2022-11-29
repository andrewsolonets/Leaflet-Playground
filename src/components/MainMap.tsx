import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

const MainMap = () => {
  const coords = [
    [46.25065055966584, 11.036051775245436],
    [46.50063818575812, 15.310544954282332],
    [46.26895958731811, 10.717556456696858],
    [49.8539806709497, 10.65025475870026],
    [49.232089717975484, 15.821333495079603],
  ];

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer
      center={[48.28657800622438, 19.658645645538787]}
      zoom={10}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=lBOaJMOjIV35X8PxMaunF07POXbqE5xzOXK5cYmUiojW8DGEm0DdkEh13hIyYWZq"
      />
      {coords.map((el: any, i) => {
        return (
          <Marker position={el} key={i}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MainMap;
