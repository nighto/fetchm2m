const fetch = require('node-fetch');
const fs = require('fs');

const M2M_URL = 'http://zn4.m2mcontrol.com.br/api/forecast/lines/load/allLines/';
const INITIAL_NUMBER = 1;
const FINAL_NUMBER = 400;

const fetchm2m = idcliente => {
    fetch(M2M_URL + idcliente)
        .then(res => res.text())
        .then(text => {
            console.log(`Found for idcliente ${idcliente}`);
            fs.writeFileSync(`${idcliente}.json`, text);
        })
        .catch(err => console.log(`Not found for idcliente ${idcliente}`));
}

for (let i = INITIAL_NUMBER; i <= FINAL_NUMBER; i++) {
    fetchm2m(i);
}