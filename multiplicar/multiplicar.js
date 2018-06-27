/**
 * Se agrega esta linea para requerir el paquete de filesystem con fines de escribir en archivos
 */
const fs = require('fs');

//Importar la libreria de colores
const colors = require('colors');

// COnvertir todo este codigo en una PROMESA
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        // Validar si nuestro parametro de entrada no es un numero
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

// Nueva funcion para listar la tabla de multiplicar de acuerdo al limite dado
let listarTabla = (base, limite) => {
    console.log('=============================='.green);
    console.log(`========Tabla del ${ base }==========`.green);
    console.log('=============================='.green);
    // Validar si nuestro parametro de entrada no es un numero
    if (!Number(base)) {
        console.log(`El valor introducido ${ base } no es un número`);
        return;
    }
    if (!Number(limite)) {
        console.log(`El valor introducido ${ limite } no es un número`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
}

// Declarar las funciones que se van a exportar para usarse de manera global
module.exports = {
    crearArchivo,
    listarTabla
}