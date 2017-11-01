
class Licencia extends Realm.Object{}

Licencia.schema = {
	name: 'Licencia',
   	primaryKey: 'id',
   	properties: {
   	    id: {type: 'string', indexed: true},
  	    nombre: 'string',
        descripcion: 'string',
        tipo:'string',
        likes: 'int'
   	}
}

module.exports = Licencia;
