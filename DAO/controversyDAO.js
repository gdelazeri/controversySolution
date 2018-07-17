const database = require('../Util/database');
const moment = require('moment-timezone');

class ControversyDAO {
    
    /**
     * Get all users.
     */
    static async getUsers(){
        const sql = 'SELECT * FROM usuario;';
        return await database.Query(sql);
    }

    static async addControversy(controversia) {
        const now = moment().tz("America/Sao_Paulo");
        const sqlPub = `INSERT INTO publicacao (data) VALUES ('${now.format('YYYY-MM-DD')}');`;
        await database.Query(sqlPub);
        const sqlPub2 = 'SELECT id FROM publicacao ORDER BY id DESC LIMIT 1';
        const pubId = await database.Query(sqlPub2);
        if (pubId[0].id > 0) {
            const sql = `INSERT INTO controversia (id, motivo, descricao, status, cnpj_mediador, tipo, resposta, reclamante, codigo_UBS, data, hora, categoria_nivel_1, categoria_nivel_2)
                            VALUES (
                                ${pubId[0].id},
                                '${controversia.motivo}',
                                '${controversia.descrição}',
                                '${controversia.status}',
                                '${controversia.cnpj_mediador}',
                                '${controversia.tipo}',
                                '${controversia.resposta}',
                                '${controversia.reclamante}',
                                ${controversia.codigo_UBS},
                                '${now.format('YYYY-MM-DD')}',
                                '${now.format('HH:mm:ss')}',
                                '${controversia.categoria_nivel_1}',
                                '${controversia.categoria_nivel_2}');`;
            return database.Query(sql);
        }
    }

    static async getControversies() {
        const sql = `SELECT * FROM controversia;`;
        return database.Query(sql);
    }

    static async addIteration(iteration) {
        const now = moment().tz("America/Sao_Paulo");
        const sqlPub = `INSERT INTO publicacao (data) VALUES ('${now.format('YYYY-MM-DD')}');`;
        await database.Query(sqlPub);
        const sqlPub2 = 'SELECT id FROM publicacao ORDER BY id DESC LIMIT 1';
        const pubId = await database.Query(sqlPub2);
        if (pubId[0].id > 0) {
            const sql = `INSERT INTO iteracao (id, id_controversia, data, resposta, usuario)
                            VALUES (
                                ${pubId[0].id},
                                ${iteration.id_controversia},
                                '${now.format('YYYY-MM-DD HH:mm:ss')}',
                                '${iteration.resposta}',
                                '${iteration.usuario}');`;
            return database.Query(sql);
        }
    }

    static async getIterations(id_controversia) {
        const sql = `SELECT * FROM iteracao WHERE id_controversia = ${id_controversia};`;
        return database.Query(sql);
    }

    static async deleteIteration(id_iteration) {
        const sql = `DELETE FROM iteracao WHERE id = ${id_iteration};`;
        try {
            await database.Query(sql);
            const sqlPub = `DELETE FROM publicacao WHERE id = ${id_iteration};`;
            await database.Query(sqlPub);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async login(usuario, senha) {
        const sql = `SELECT * FROM usuario WHERE usuario = '${usuario}' AND senha = '${senha}';`;
        const user = await database.Query(sql);
        if (user.length === 0) {
            return undefined;
        } else {
            return user[0];
        }
    }
}

module.exports = ControversyDAO;