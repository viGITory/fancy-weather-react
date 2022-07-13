import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

import { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { MAPBOX_API_TOKEN } from '../../api/apiKeys';

import translate from '../../data/translate';

const Map = ({ coords, timeZone, lang, location }) => {
  mapboxgl.accessToken = MAPBOX_API_TOKEN;
  const mapboxLanguage = new MapboxLanguage();

  const [marker, setMarker] = useState();
  const mapContainer = useRef(null);
  const map = useRef(null);

  const isCoords = Object.keys(coords).length;

  useEffect(() => {
    if (marker) marker.remove();
    if (map.current) {
      map.current.flyTo({
        center: [coords.long, coords.lat],
        zoom: 1.3,
      });

      map.current.setStyle(
        mapboxLanguage.setLanguage(map.current.getStyle(), lang)
      );

      map.current.setFilter('country-boundaries', [
        'in',
        'iso_3166_1_alpha_3',
        location.iso_alpha_3,
      ]);

      const newMarker = new mapboxgl.Marker({ color: '#ef4444', scale: 0.8 })
        .setLngLat([coords.long, coords.lat])
        .addTo(map.current);

      setMarker(newMarker);
    }
  }, [coords.lat, coords.long, lang]);

  useEffect(() => {
    if (!isCoords || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/pantory/cl5d0fl0x00i714llkqa0xp3u',
      center: [coords.long, coords.lat],
      zoom: 1.3,
      minZoom: 1.3,
      attributionControl: false,
    });

    map.current.on('load', () => {
      map.current.setStyle(
        mapboxLanguage.setLanguage(map.current.getStyle(), lang)
      );

      map.current.addLayer(
        {
          id: 'country-boundaries',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
          },
          'source-layer': 'country_boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#ef4444',
            'fill-opacity': 0.3,
          },
        },
        'country-label'
      );

      map.current.setFilter('country-boundaries', [
        'in',
        'iso_3166_1_alpha_3',
        location.iso_alpha_3,
      ]);
    });

    const marker = new mapboxgl.Marker({ color: '#ef4444', scale: 0.8 })
      .setLngLat([coords.long, coords.lat])
      .addTo(map.current);

    setMarker(marker);
  }, [coords, timeZone]);

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
