import Realm from 'realm';
import Licencia from '../models/Licencia';
import Utils from '../Utils';

let repository = new Realm({
    schema: [Licencia]
});

let LicenciaService = {
  findAll: function(sortBy) {
    //if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
    return repository.objects('Licencia').sorted('nombre');
  },

  save: function(Licencia) {
    //Si tienen el mismo nombre no lo insertara
    if (repository.objects('Licencia').filtered("nombre = '" + Licencia.nombre + "'").length) return;

    repository.write(() => {
      //Licencia.updatedAt = new Date();
      repository.create('Licencia', Licencia);
    })
  },

  update: function(Licencia, callback) {
    if (!callback) return;
    repository.write(() => {
      callback();
      //Licencia.updatedAt = new Date();
    });
  },

  //*Hacer un update solo para likes

  find: function(nombre){
    return repository.objects('Licencia').filtered('nombre contains "'+nombre+'"');
  }

};

//Prueba(Esto iria en la vista)
LicenciaService.save({id: Utils.guid(), nombre: 'GNU', descripcion: 'descripcion', tipo: 'Libre', likes: 0});
LicenciaService.save({id: Utils.guid(), nombre: 'MIT', descripcion: 'descripcion de MIT', tipo: 'Codigo Abierto', likes: 0});

module.exports = LicenciaService;