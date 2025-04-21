<<<<<<< HEAD
const db = require("./config/db")
;(async () => {
  try {
    const result = await db.query("select * from cliente")
    console.log("Conexión exitosa. Fecha y hora actuales:", result.rows[0])
  } catch (error) {
    console.error("Error en la conexión:", error)
  }
})()
=======
const db = require('./config/db');

(async () => {
    try {
        const result = await db.query('select * from cliente'); 
        console.log('Conexión exitosa. Fecha y hora actuales:', result.rows[0]);
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
})();
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
