const { DataSource } = require("typeorm");

function createDatasource (databaseName) {
     const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: databaseName,
        synchronize: false,
        logging: false,
    }) ;

    return AppDataSource;
};

const conecctionDB = async (databaseName) => {
    const dataSource =  createDatasource(databaseName);
    await dataSource.initialize();

    return dataSource;
}

module.exports = { conecctionDB };