import React, { useRef, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import WaterIcon from "../assets/water.svg";

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
  const [isMapReady, setIsMapReady] = useState(false);

  // after the map is ready make zoom to Yerevan coordinates
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

    setIsMapReady(true);
  };

  return (
    <View style={styles.container}>
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
            // icon={WaterIcon as unknown as number | ImageURISource}
          >
            <View
              style={{
                width: 40,
                height: 40,
                // backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 20,
              }}
            >
              <WaterIcon height={20} />
            </View>
          </Marker>
        ))}
      </MapView>

      {!isMapReady && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#1E90FF" />
          <Text style={styles.loadingText}>
            Finding best view for water points...
          </Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "#1E293B",
  },
});
