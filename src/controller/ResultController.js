import resultService from '../service/ResultService'

let getAllResult = async (req, res) => {
    try {
        let data = await resultService.getAllResult()
        return res.send(data);
    } catch (e) {
        return res.send(e);
    }
}

module.exports = {
    getAllResult: getAllResult,
}

