const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea.'
};
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer.' , {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de la tarea.' , {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea.' , {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
