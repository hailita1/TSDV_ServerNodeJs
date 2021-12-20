import db from '../models/index'

let getAllResult = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let results = await db.Result.findAll({
                raw: true
            })
            resolve(results);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllResult: getAllResult,
}
