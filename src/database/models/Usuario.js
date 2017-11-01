
class Usuario extends Realm.Object{}

Usuario.schema = {
    	name: 'Usuario',
    	primaryKey: 'user',
    	properties: {
    	    user: {type: 'string', indexed: true},
    	    pass: 'string'
    	}
    }

module.exports = Usuario;