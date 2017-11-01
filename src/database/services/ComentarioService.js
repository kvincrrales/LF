import Realm from 'realm';
import Comentario from '../models/Comentario';
import Usuario from '../models/Usuario';//Es necesario importarla ya que se usa en un campo del schema 
import Licencia from '../models/Licencia';//Es necesario importarla ya que se usa en un campo del schema 
import Utils from '../Utils';


let repository = new Realm({
    schema: [Usuario,Licencia,Comentario]
});

let ComentarioService = {
  findAll: function(sortBy) {
    //if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
    return repository.objects('Comentario').sorted('updatedAt');
  },

  save: function(Comentario) {
    //Si tienen el mismo id no lo insertara
    if (repository.objects('Comentario').filtered("id = '" + Comentario.id + "'").length) return;

    repository.write(() => {
      Comentario.updatedAt = new Date();
      repository.create('Comentario', Comentario);
    })
  },

  update: function(Comentario, callback) {
    if (!callback) return;
    repository.write(() => {
      callback();
      Comentario.updatedAt = new Date();
    });
  },

  find: function(lic,us){//Hay que filtrar por licencia y usuario
    return repository.objects('Comentario').filtered('id_Licencia.nombre = "'+lic+'" AND id_Usuario.user = "'+us+'"').sorted('updatedAt');
  }

};

//Prueba(Esto iria en la vista)
var us= repository.objects('Usuario').filtered('user = "Cardo"');//Hay que cambiarlo por el usuario que este activo en la seccion
var lic= repository.objects('Licencia').filtered('nombre = "MIT"');//Hay que cambiarlo por la licencia en la que se este actualmente

ComentarioService.save({id: Utils.guid(),id_Licencia: lic[0], id_Usuario: us[0],comentario: 'Buen Aporte!'});

module.exports = ComentarioService;