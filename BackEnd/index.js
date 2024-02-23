const server = require("./src/app");
const { conn } = require('./src/db')

//sincronizo todos los modelos con la base de datos
conn.sync({ force: false }).then(()=>{
    server.listen("3001", () => {
    console.log("server listening on port 3001"); //verifico mi conxion al puerto 
    });
}); 