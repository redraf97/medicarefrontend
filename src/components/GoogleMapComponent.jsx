import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const GoogleMapComponent = ({ location, onLocationSelect }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Remplacez par votre clé API
  });

  const [marker, setMarker] = useState(location || center);
  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
    if (location) {
      map.panTo(location);
    }
  }, [location]);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

  const handleClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const newLocation = { lat, lng };
    setMarker(newLocation);
    onLocationSelect(newLocation);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location || center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleClick}
    >
      <Marker position={marker} />
    </GoogleMap>
  ) : <></>;
};

export default React.memo(GoogleMapComponent);
