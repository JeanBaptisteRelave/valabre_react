import { StyleSheet, Text, View } from 'react-native';

export default function Infos() {
  return (
    <View style={styles.mainView}>
      <View style={styles.upperDiv}>
        <Text style={styles.mainFont}>Informations</Text>
      </View>

      <Text style={styles.titleFont}>Informations...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    mainFont: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 60,
        color: '#ffffff'
    },
    upperDiv: {
        height: 120,
        backgroundColor: '#A44A4A'
    },
    titleFont: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 250
    }
});