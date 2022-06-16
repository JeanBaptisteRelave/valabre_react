import { StyleSheet, Text, View } from 'react-native';
import { LatLng, LeafletView, MapShapeType } from 'react-native-leaflet-view';

export default function Map() {
  return (
    <View style={styles.container}>
      <LeafletView
        mapCenterPosition={{lat: 43.40903821777055, lng: 5.414886474609376}}
        zoom={10}
        mapShapes={[
          {
            shapeType: MapShapeType.RECTANGLE,
                color: "red",
                id: "6",
                bounds: [
                  { lat: 43.33461269264844, lng: 5.292059784234989 },
                  { lat: 43.52134879487134, lng: 5.548273892794159 }
                ]
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});