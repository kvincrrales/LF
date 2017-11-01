
class Comentario extends Realm.Object{}

Comentario.schema = {
	name: 'Comentario',
    primaryKey: 'id',
    properties: {
        id: {type: 'string', indexed: true},
        id_Licencia: 'Licencia',//Relacion
        id_Usuario: 'Usuario',//Relacion
        comentario:'string',
        updatedAt: 'date'
    }
}

module.exports = Comentario;