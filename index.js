//Importar Libreria
const express = require('express');
const { conecctionDB } = require('./database')

//Usar la libreria para iniciar una app
const app = express();

app.use(express.json())

//Declaracion del Endpoint
app.get('/database-dinamyc-conecction', async (request, response) => {
    /*LOGICA PARA CONECTAR A LA BD*/
    const connection = await conecctionDB(request.query.database_name);
    const result = await connection.query(request.query.queryDB);

    response.json({ message: 'hola demo app', resultDatabase: result})
});

//Levantar API
app.listen(6000, () => {
    console.log('mi servidor esta en linea puerto 6000')
})