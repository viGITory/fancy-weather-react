import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

import { useRef, useEffect } from 'react';

import mapboxgl from 'mapbox-gl';
import { MAPBOX_API_TOKEN } from '../../api/apiKeys';

const Map = ({ coords }) => {
  mapboxgl.accessToken = MAPBOX_API_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);

  const isCoords = Object.keys(coords).length;

  useEffect(() => {
    const createMap = ({ coords }) => {
      if (!isCoords) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/pantory/cl4hjs272001m15pjaivmplab',
        center: [coords.long, coords.lat],
        zoom: 9,
        attributionControl: false,
      });

      new mapboxgl.Marker({ color: '#86c3db', scale: 0.8 })
        .setLngLat([coords.long, coords.lat])
        .addTo(map.current);

      map.current.once('idle', () => {
        map.current.resize();
      });
    };
    createMap({ coords });
  });

  const formatCoord = (coord) => {
    const splitedCoord = coord.toFixed(4).toString().split('.');
    return `${splitedCoord[0]}°${splitedCoord[1]}'`;
  };

  return isCoords ? (
    <div className="map">
      <div ref={mapContainer} className="map__container"></div>
      <div className="map__coords">
        <p>Latitude: {formatCoord(coords.lat)}</p>
        <p>Longitude: {formatCoord(coords.long)}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Map;
