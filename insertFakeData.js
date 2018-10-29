const SerialPort = require('serialport');
const config = require('./config').database2;
const ReadLine = require('@serialport/parser-readline');
const sql = require('mssql');

sql.connect(config).then(connection => {
    let temperatura = 20;
    let umidade = 50;
    setInterval(() => {
        temperatura += Math.floor(Math.random() * 3 - 1);
        umidade += Math.floor(Math.random() * 3 - 1);
        console.log(temperatura);
        console.log(umidade);
        connection.request().query(`INSERT INTO leitura (temperatura, umidade, momento)
                                  VALUES (${temperatura}, ${umidade}, CURRENT_TIMESTAMP)`).then(result => {
                                      console.log('Success!');
                                  }).catch(error => {
                                      console.error('Error:', error);
                                  });

    }, 2000);
}).catch(error => {
    console.log(error);
});
