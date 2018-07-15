const ControversiasDAO = require('../DAO/controversiasDAO');

class MainController {

    /**
     * Get all products.
     */
    static async getUsers(req, res) {
        let success = true;
        const data = await ControversiasDAO.getUsers();
        res.send({ success, data });
    }

    static async addControversy(req, res) {
        let success = true;
        const data = await ControversiasDAO.addControversy(req.body);
        res.send({ success, data });
    }

    static async getControversies(req, res) {
        let success = true;
        const data = await ControversiasDAO.getControversies();
        res.send({ success, data });
    }

    static async addIteration(req, res) {
        let success = true;
        const data = await ControversiasDAO.addIteration(req.body);
        res.send({ success, data });
    }

    static async getIterations(req, res) {
        let success = true;
        const data = await ControversiasDAO.getIterations(req.params.id_controversia);
        res.send({ success, data });
    }
 }

module.exports = MainController;