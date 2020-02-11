//File System = fs
const fs = require('fs');

let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data , (err) => {
        //   if (err) throw err;
            if(err) throw new Error('No se pudo grabar', err) 
        });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer = [];
    }
    
}


const crear = (descripcion) => {

    //antes del push tengo que cargar la Base de Datos
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const borrar = (descripcion) => {
      cargarDB();
      let nuevoListado = listadoPorHacer.filter( tarea => {
          return tarea.descripcion !== descripcion;
      })
      if(nuevoListado.length !== listadoPorHacer.length) {
          listadoPorHacer = nuevoListado;
          guardarDB();
          return true;
      } else return false;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    
    //Para buscar el indice del elemento
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion
    })
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
        }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}