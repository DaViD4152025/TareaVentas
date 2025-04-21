<<<<<<< HEAD
const { Pool } = require("pg")

class Database {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: "admin123",
      port: 5432,
    })
  }

  query(text, params) {
    return this.pool.query(text, params)
  }
}

module.exports = new Database()
=======
const { Pool } = require('pg');

class Database {
    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',  
            password: 'admin123',    
            port: 5432,           
        });
    }

    query(text, params) {
        return this.pool.query(text, params);
    }
}

module.exports = new Database();
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
