import * as React from 'react';
import Map from "./pages/Map";
import Urgence from "./pages/Urgence";
import Infos from "./pages/Infos";
import { BottomNavigation, Text } from 'react-native-paper';

const theme = {
  roundness: 2,
  colors: {
    primary: '#A44A4A',
    accent: '#CA7D7D',
  },
};

const UrgenceRoute = () => <Urgence/>;

const CarteRoute = () => <Map/>;

const InfosRoute = () => <Infos/>;

// Ici on traite seulement le menu de naviguation et la naviguation.
const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'urgence', title: 'Urgence', icon: 'phone' },
    { key: 'carte', title: 'Carte', icon: 'map' },
    { key: 'infos', title: 'Infos', icon: 'help' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    urgence: UrgenceRoute,
    carte: CarteRoute,
    infos: InfosRoute,
  });

  return (
    <BottomNavigation
      theme={theme}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;

