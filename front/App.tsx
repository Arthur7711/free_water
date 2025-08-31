import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const locations = [
    { id: 1, title: "Yerevan", latitude: 40.1792, longitude: 44.4991 },
    { id: 2, title: "Tbilisi", latitude: 41.7151, longitude: 44.8271 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.1792,
          longitude: 44.4991,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.title}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
