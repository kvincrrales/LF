import Realm from 'realm';
import Usuario from '../models/Usuario';

let repository = new Realm({
    schema: [Usuario]
});

let UsuarioService = {
  findAll: function(sortBy) {
    //if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
    return repository.objects('Usuario').sorted('user');
  },

  save: function(Usuario) {
    //Si tienen el mismo user no lo insertara
    if (repository.objects('Usuario').filtered("user = '" + Usuario.user + "'").length) return;

    repository.write(() => {
      //Usuario.updatedAt = new Date();
      repository.create('Usuario', Usuario);
    })
  },

  update: function(Usuario, callback) {
    if (!callback) return;
    repository.write(() => {
      callback();
      //Usuario.updatedAt = new Date();
    });
  },

  find: function(user){
    return repository.objects('Usuario').filtered('user = "'+user+'"');
  }

};

//Prueba(Esto iria en la vista)
UsuarioService.save({user: 'Cardo', pass: '1234'});
UsuarioService.save({user: 'Kevin', pass: '1234'});

module.exports = UsuarioService;