//Declarar la configuracion de los parametros que tienen las mismas opciones
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//USO DEL YARGS PARA MANEJO DE PARAMETROS
// Agregarle configuracion a los parametros de entrada en el programa
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en archivo de salida la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}