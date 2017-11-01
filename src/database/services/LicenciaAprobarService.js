import Realm from 'realm';
import LicenciaAprobar from '../models/LicenciaAprobar';
import Usuario from '../models/Usuario';//Es necesario importarla ya que se usa en un campo del schema 
import Utils from '../Utils';

//SE ABRE TAMBIEN EL SCHEMA DE USUARIO PORQUE LO VAMOS A NECESITAR
let repository = new Realm({
    schema: [Usuario,LicenciaAprobar]
});

let LicenciaAprobarService = {
  findAll: function(sortBy) {
    //if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
    return repository.objects('LicenciaAprobar').sorted('updatedAt');
  },

  save: function(LicenciaAprobar) {
    //Si tienen el mismo name no lo insertara
    if (repository.objects('LicenciaAprobar').filtered("nombre = '" + LicenciaAprobar.nombre + "'").length) return;

    repository.write(() => {
      repository.create('LicenciaAprobar', LicenciaAprobar);
    })
  },

  update: function(LicenciaAprobar, callback) {
    if (!callback) return;
    repository.write(() => {
      callback();
      LicenciaAprobar.updatedAt = new Date();
    });
  },

  find: function(nombre){
    return repository.objects('LicenciaAprobar').filtered('nombre = "'+nombre+'"');
  }

};

//Prueba(Esto iria en la vista)
var us= repository.objects('Usuario').filtered('user = "Cardo"');//Hay que cambiarlo por el usuario que este activo en la seccion
LicenciaAprobarService.save({id:Utils.guid(),id_Usuario: us[0],nombre: 'pata',descripcion:'descripcion',tipo:'libre', updatedAt: new Date()});

module.exports = LicenciaAprobarService;