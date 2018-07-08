//console.log(process.argv[2]);

const fs = require('fs');
const crypto = require('crypto');

fs.readFile(process.argv[2], 'utf8', (err,data)=>{
    if( err === null ) {
        const createHash = crypto.createHmac('sha256',data).digest('hex');
        console.log('Oto funkcja skrótu: ', createHash);
    } else {
        console.log('Nie bangla');
    }
})