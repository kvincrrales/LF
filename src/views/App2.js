import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import Realm from 'realm';

import ComentarioService from '../database/services/ComentarioService';

let dataList = ComentarioService.findAll();
let p = ComentarioService.find('MIT','Cardo');

export default class LF extends Component {
  constructor(props) {
    super(props);
    this.state = {dataList: dataList};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            

           Usuario: {p[0].id_Usuario.user }
           Password: {p[0].id_Usuario.pass }  
        </Text>
        <Text style={styles.instructions}>
          Licencia: {p[0].id_Licencia.nombre }
          Descripcion: {p[0].id_Licencia.descripcion }  
        </Text>
        <Text style={styles.instructions}>
            Comentario: {p[0].comentario}
          </Text>
        <Text style={styles.instructions}>
          Cantidad de LicenciaAprobars guardados: {dataList.length}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LF', () => LF);