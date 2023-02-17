import* as React from 'react';
import{Text,View,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Séries Populares</Text>
      </View>
      <ScrollView>
        <View>
          <Text>The Last Of Us</Text>
          <Image style={estilo.img} source={require("./assets/Capa-The-Last-Of-Us.jpg")}/>
          <Text >Euphoria</Text>
          <Image style={estilo.img} source={require("./assets/euphoria.jpg")}/>
          <Text>YOU</Text>
          <Image style={estilo.img} source={require("./assets/you-serie--820x1024.jpg")}/>
          <Text>Modern Family</Text>
          <Image style={estilo.img} source={require("./assets/Modern_Family_temporada_4.jpg")}/>
        </View>
      </ScrollView>
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#4682B4"
  },
  titulo:{
    marginTop:30,
    fontSize:40,
    color: "#FFFAFA",
    marginBottom:20
  },
  img:{
    borderRadius:20,
    width: 250,
    height: 200,
    marginBottom:20
  }
})