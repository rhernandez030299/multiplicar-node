const fs = require('fs');
const colors = require('colors');

let fileRead = async(base) => {

    console.log('=================='.green);
    console.log(`tabla of 3`.green);
    console.log('=================='.green);


    let path = `./tables/tables-${base}.txt`;

    if (!Number(base)) {
        throw new Error('The base "${base}" is not numeric');
    }

    let data = fs.readFileSync(path, err => {
        if (err) {
            throw new Error('The file not exists');
        }
    });

    return data;
};

let fileCreate = async(base) => {

    if (!Number(base)) {
        throw new Error(`the base ${base} is not numeric`);
        return false;
    }

    let data = '';
    let path = `./tables/tables-${base}.txt`;

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(path, data, (err) => {

        if (err) {
            throw new Error('Error al crear los archivos ', err);
        }

        return data;
    });

};

module.exports = {
    fileCreate,
    fileRead
}