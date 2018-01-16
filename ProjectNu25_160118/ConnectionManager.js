module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["nuwanthi"] = {
        host: process.env.EndPoint_nuwanthi,
        port: 3306,
        user: "root",
        password: "12345678",
        database: "nu_db",
    };
    
    };