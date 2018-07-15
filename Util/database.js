const { Client } = require('pg');

class Database {
    static async Query(sql) {
        const client = new Client({
            user: 'wfocmdsmvfepsm',
            host: 'ec2-54-197-231-63.compute-1.amazonaws.com',
            database: 'd4iffd2ndb9hh8',
            password: '520dcd91f79012584cb062470d0e71e2a6f36c8f081cc0bb3c799aa216e305d5',
            port: 5432,
            ssl: true,
        })
        console.log(sql);
        return new Promise((resolve, reject) => {
            client.connect();
            client.query(sql, (err, res) => {
                if (err)  {
                    reject(err);
                }
                client.end();
                if (res)
                    resolve(res.rows);
            });
        });
    }
}

module.exports = Database;