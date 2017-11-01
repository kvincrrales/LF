
class LicenciaAprobar extends Realm.Object{}

LicenciaAprobar.schema={
    name: 'LicenciaAprobar',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      id_Usuario: 'Usuario',//Relacion
      nombre: 'string',
      descripcion: 'string',
      tipo:'string',
      updatedAt: 'date'
    }
}

module.exports = LicenciaAprobar;