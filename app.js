// /**
//  * Se agrega esta linea para requerir el paquete de filesystem con fines de escribir en archivos
//  */
// const fs = require('fs');

//Requerir la nueva libreria creada en la carpeta multiplicar
// const multiplicar = require('./multiplicar/multiplicar');
//Desctructuracion para evitar usar el comodin multiplicar siempre que se quiera referenciar la o las funciones importadas
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Importar la libreria de colores
const colors = require('colors');

//USO DEL YARGS PARA MANEJO DE PARAMETROS
// Agregarle configuracion a los parametros de entrada en el programa
const argv = require('./config/yargs').argv;
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Imprime en archivo de salida la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

// console.log(argv);

// Obtener los comandos de console
let comando = argv._[0];

// Ejecutar switch para discriminar entre los comandos recibidos
switch (comando) {
    case 'listar':
        console.log('LISTAR');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('CREAR');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no reconocido');

}
// let base = '6';
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${ base } * ${ i } = ${ base * i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });

// Imprimir las propiedas del modulo importado
// console.log(multiplicar);

// Existe el objeto llamado Process con bastante informacion del entorno de ejecucion
// console.log(process);
// console.log(process.argv);
// Capturar los parametros de entrada
let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
// console.log(`Base: ${argv.base}`);
// console.log(`Limite: ${argv.limte}`);
// console.log('Limite:', argv.limte);
// console.log(argv2);
// console.log(parametro);
// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(err => console.log(err))