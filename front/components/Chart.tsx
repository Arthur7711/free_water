import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export function Chart() {
  const locations = [
    { id: 1, title: "Yerevan", latitude: 40.1792, longitude: 44.4991 },
    { id: 2, title: "Yer1", latitude: 40.1793, longitude: 44.498 },
    { id: 3, title: "Yerevan 3", latitude: 40.1794, longitude: 44.497 },
    { id: 4, title: "Yerevan 4", latitude: 40.1795, longitude: 44.496 },
    { id: 5, title: "Yerevan 5", latitude: 40.1796, longitude: 44.495 },
    { id: 6, title: "Yerevan 6", latitude: 40.1797, longitude: 44.494 },
    { id: 7, title: "Yerevan 7", latitude: 40.1798, longitude: 44.493 },
    { id: 8, title: "Yerevan 8", latitude: 40.1799, longitude: 44.492 },
    { id: 9, title: "Yerevan 9", latitude: 40.18, longitude: 44.491 },
    { id: 10, title: "Yerevan 10", latitude: 40.1801, longitude: 44.49 },
  ];

  const mapRef = useRef<MapView | null>(null);
  //  after the map is ready make zoom to Yerevan coordinates
  const handleMapReady = () => {
    if (!mapRef.current || locations.length === 0) return;

    mapRef.current.fitToCoordinates(
      locations.map((loc) => ({
        latitude: loc.latitude,
        longitude: loc.longitude,
      })),
      {
        edgePadding: { top: 80, right: 80, bottom: 80, left: 80 },
        animated: true,
      },
    );
  };

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: 40.1792,
        longitude: 44.4991,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
      zoomEnabled
      onMapReady={handleMapReady}
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
          title={loc.title}
        />
      ))}
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: { width: "100%", height: "100%" },
});
