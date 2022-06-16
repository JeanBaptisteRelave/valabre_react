import { StyleSheet, Text, View } from 'react-native';

export default function Urgence() {
  return (
    <View style={styles.mainView}>
      <View style={styles.upperDiv}>
        <Text style={styles.mainFont}>Urgences</Text>
      </View>

      <Text style={styles.titleFont}>En cas d'urgence vous pouvez appeler :</Text>
      <View style={styles.butView}><Text style={styles.butFont}>Pompier (18)</Text></View>
      <View style={styles.butView}><Text style={styles.butFont}>Samu (15)</Text></View>
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
    butView:{
      backgroundColor: "#A44A4A",
      padding: 10,
      borderRadius: 20,
      marginTop: 30,
      width: '50%',
      marginLeft: '25%'
    },
    butFont:{
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 18
    },
    titleFont:{
      marginTop: 150,
      fontSize: 25,
      textAlign: "center"
    }
  });