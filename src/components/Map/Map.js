import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

import { useRef, useEffect } from 'react';

import mapboxgl from 'mapbox-gl';
import { MAPBOX_API_TOKEN } from '../../api/apiKeys';

import translate from '../../data/translate';

const Map = ({ coords, timeZone, lang }) => {
  mapboxgl.accessToken = MAPBOX_API_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);

  const isCoords = Object.keys(coords).length;

  useEffect(() => {
    const createMap = ({ coords }) => {
      if (!isCoords) return;

      const hours = new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        timeZone: timeZone,
      });

      const isPMTime = !(hours >= 6 && hours < 18);
      const mapStyle = isPMTime
        ? 'mapbox://styles/pantory/cl4liy3u5000k15qgoq884fni'
        : 'mapbox://styles/pantory/cl4liz48h000l15qg5nusr9rs';

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyle,
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
  }, [coords, isCoords, timeZone]);

  const formatCoord = (coord) => {
    const splitedCoord = coord.toFixed(4).toString().split('.');
    return `${splitedCoord[0]}°${splitedCoord[1]}'`;
  };

  return isCoords ? (
    <div className="map">
      <div ref={mapContainer} className="map__container"></div>
      <div className="map__coords">
        <p>
          {translate[lang].coords.latitude}: {formatCoord(coords.lat)}
        </p>
        <p>
          {translate[lang].coords.longitude}: {formatCoord(coords.long)}
        </p>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Map;
