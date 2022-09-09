import pg from 'pg';

const {Client} = pg;

/*
// Conexão na Prodabel

const clientPg = new Client ({
    user: 'postgres',
    host: 'localhost',
	database: 'CONVIDADOS',
	password: '1234',
	porta: 5432
});

*/

// Conexão em casa

const clientPg = new Client ({
    user: 'postgres',
    host: 'localhost',
	database: 'convidados',
	password: 'Elr+922124',
	porta: 5432
});


clientPg.connect(function(error){
    
    if(error){
        console.log(error);
        console.log('erro co conectar no banco de dados');
    }else{
        console.log ('banco conectado');
    }
});
export default clientPg;