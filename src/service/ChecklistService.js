import db from '../models/index'

let getAllChecklist = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let checklists = await db.Checklist.findAll({
                raw: true
            })
            let resultList = await db.Result.findAll({
                raw: true
            })
            if (checklists) {
                for (let i = 0; i < checklists.length; i++) {
                    checklists[i].results = resultList;
                }
            }
            resolve(checklists);
        } catch (e) {
            reject(e);
        }
    })
}

let getChecklistById = (checklistId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checklist = await db.Checklist.findOne({
                where: {id: checklistId},
                raw: true
            })
            if (checklist) {
                resolve(checklist);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createChecklist = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                await db.Checklist.create({
                    content: data[i].content,
                    result: data[i].result,
                    createAt: new Date(),
                    createBy: data[i].author,
                    updateAt: null
                })
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let updateChecklist = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                let checklist = await db.Checklist.findOne({
                    where: {id: data[i].id}
                });
                checklist.content = data[i].content;
                checklist.result = data[i].result;
                checklist.updateAt = new Date()
                await checklist.save();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let deleteChecklist = (checklistId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checklist = await db.Checklist.findOne({
                where: {id: checklistId}
            });
            await checklist.destroy();
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllChecklist: getAllChecklist,
    getChecklistById: getChecklistById,
    createChecklist: createChecklist,
    updateChecklist: updateChecklist,
    deleteChecklist: deleteChecklist
}
