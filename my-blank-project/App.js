import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop } from "react-native-svg"
const { width, height} = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>Registra tu cuenta</Text>
      <TextInput
        placeholder="tioaceite@gmail.com"
        style={styles.textInput}
      />
      <TextInput
        placeholder="contraasdasdasdseña"
        style={styles.textInput}
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

//estilos css

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  titulo: {
    fontSize:80,
    fontWeight:'bold',
    color:'#34434D'
  },

  subtitulo:{
    fontSize:20,
    color:'red',
  },

  textInput:{
    borderWidth:1,
    borderColor:'#fff',
    padding:10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius:30,
    backgroundColor: '#fff'
    

  }


  
});
