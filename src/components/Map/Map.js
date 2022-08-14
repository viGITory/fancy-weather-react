import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

import { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { MAPBOX_API_TOKEN } from '../../api/apiKeys';

import translate from '../../data/translate';

const Map = ({ appState, location }) => {
  mapboxgl.accessToken = MAPBOX_API_TOKEN;
  const mapboxLanguage = new MapboxLanguage();

  const [marker, setMarker] = useState();
  const [popup, setPopup] = useState();
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { lang } = appState;
  const { coords, city, countryCode } = location;

  const updateCountryBoundaries = () => {
    map.current.setFilter('country-boundaries', [
      'all',
      [
        'match',
        ['get', 'worldview'],
        ['all', countryCode.toUpperCase()],
        true,
        false,
      ],
      [
        'match',
        ['get', 'iso_3166_1'],
        ['all', countryCode.toUpperCase()],
        true,
        false,
      ],
    ]);
  };

  useEffect(() => {
    if (popup) popup.remove();

    if (map.current) {
      map.current.flyTo({
        center: [coords.long, coords.lat],
        zoom: 1.3,
      });

      map.current.setStyle(
        mapboxLanguage.setLanguage(map.current.getStyle(), lang)
      );

      updateCountryBoundaries();
      marker.setLngLat([coords.long, coords.lat]);

      // easter egg
      if (city === translate['ru'].easter_eggs[48][17].city_name) {
        const popup = new mapboxgl.Popup()
          .addClassName('map__easter-egg')
          .setText(translate['ru'].easter_eggs[48][17].quote)
          .addTo(map.current);

        marker.setPopup(popup);
        setPopup(popup);
      }
    }
  }, [coords.lat, coords.long, lang]);

  useEffect(() => {
    if (map.current) return;

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

      updateCountryBoundaries();
    });

    const marker = new mapboxgl.Marker({ color: '#ef4444', scale: 0.8 })
      .setLngLat([coords.long, coords.lat])
      .addTo(map.current);

    setMarker(marker);
  }, [coords]);

  const formatCoord = (coord) => {
    const splitedCoord = coord.toFixed(4).toString().split('.');
    return `${splitedCoord[0]}°${splitedCoord[1]}'`;
  };

  return (
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
  );
};

export default Map;
