const ControversyDAO = require('../DAO/controversyDAO');

class MainController {
    static async online(req, res) {
        res.send("API Online");
    }

    static async getUsers(req, res) {
        let success = true;
        const data = await ControversyDAO.getUsers();
        res.send({ success, data });
    }

    static async addControversy(req, res) {
        let success = true;
        const data = await ControversyDAO.addControversy(req.body);
        res.send({ success, data });
    }

    static async getControversies(req, res) {
        let success = true;
        const data = await ControversyDAO.getControversies();
        res.send({ success, data });
    }

    static async addIteration(req, res) {
        let success = true;
        const data = await ControversyDAO.addIteration(req.body);
        res.send({ success, data });
    }

    static async getIterations(req, res) {
        let success = true;
        const data = await ControversyDAO.getIterations(req.params.id_controversia);
        res.send({ success, data });
    }
 }

module.exports = MainController;