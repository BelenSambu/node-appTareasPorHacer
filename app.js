const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

//Los comandos creados para la consola
let comando = argv._[0];
switch(comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log("Tarea: ",tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        if(listado.length > 0) {
            for (let tarea of listado) {
                console.log('============Por Hacer============'.green);
                console.log(tarea.descripcion);
                console.log(tarea.completado);
                console.log('================================='.green);
            }
        } else {
            console.log('======No hay tareas pendientes======'.red);
        }

    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido')
}