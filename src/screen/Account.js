import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';

export default function Account() {
  return (
    <SafeAreaView style={styles.contenedorAccount}>
      <View style={styles.containerSvg}>
        <SvgXml
            xml={fondoSvg}
        />
        <Text style={styles.svgText}>Mi Perfil</Text>
     </View>
      <Image
        source={require('../assets/account.jpeg')}
        style={styles.imagen}
      />
      <View style={styles.contenedorTextos}>
        <Text style={styles.campo}>Nombre:</Text><Text style={styles.valor}> Nombre De Usuario </Text>
      </View>
      <View style={styles.contenedorTextos}>
        <Text style={styles.campo}>CURP:</Text><Text style={styles.valor}> MIMD990701HQTRRG07 </Text>
      </View>
      <View style={styles.contenedorTextos}>
        <Text style={styles.campo}>Telefono:</Text><Text style={styles.valor}> 4461520321 </Text>
      </View>
      <View style={styles.contenedorTextos}>
        <Text style={styles.campo}>Email:</Text><Text style={styles.valor}> Correo@correo.com </Text>
      </View>
      <View style={styles.contenedorBotones}>
      <TouchableOpacity 
          // onPress={goToEditar}
          style={styles.botonPerfil}>
          <Text
            style={styles.textoBotonPerfil}
          >Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          // onPress={goToPublicar}
          style={styles.botonPerfil}>
          <Text
            style={styles.textoBotonPerfil}
          >Publicar trabajo</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  contenedorAccount: {
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',
    // backgroundColor:'cornflowerblue',
  },
  containerSvg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  svgText: {
    position: 'absolute',
    top: 90,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowRadius: 3
  },
  contenedorTextos: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    marginBottom: 15,
    backgroundColor: '#088BED',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    }, 
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  campo: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    borderRadius: 8,
    textAlign: 'center',
    padding: 2,
    width: 80,
    paddingVertical:7,

  },
  valor: {
    height: 'auto',
    fontSize: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: 'center',
    padding: 2,
    marginRight: 5,
    width: 235,
    paddingVertical:7,
  },
  imagen: {
    borderRadius: 15,
    width: 200,
    height: 200,
    marginBottom: 30,
    alignSelf: 'center',
  },
  contenedorBotones:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  botonPerfil:{
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#088BED',
    marginHorizontal:15,
    shadowOffset: {
      width: 0,
      height: 2,
    }, 
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  textoBotonPerfil:{
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const fondoSvg = `<svg width="391" height="202" viewBox="0 0 391 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H391V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`