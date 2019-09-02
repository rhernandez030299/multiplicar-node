const { argv } = require('./config/yargs');
const colors = require('colors');
let { fileCreate, fileRead } = require('./multiplicate/multiplicate');

let command = argv._[0];

switch (command) {
    case 'listar':

        fileRead(argv.base)
            .then((res) => {
                console.log(`${res}`);
            })
            .catch(e => {
                console.log(e);
            })

        break;
    case 'crear':

        fileCreate(argv.base)
            .then((res) => {
                console.log(`File created correctly ${res}`);
            })
            .catch(e => {
                console.log(e);
            });

    default:
        console.log('Command not valid');
        break;
}