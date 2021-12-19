import db from '../models/index'

let getAllChecklistTemplate = () => {
    return new Promise(async (resolve, reject) => {
            try {
                let checklistTemplates = await db.ChecklistTemplate.findAll({
                    raw: true
                });
                resolve(checklistTemplates);
            } catch (e) {
                reject(e)
            }
        }
    )
}

let getChecklistTemplateById = (checklistTemplateId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checklistTemplate = await db.ChecklistTemplate.findOne({
                where: {id: checklistTemplateId},
                raw: true
            })
            if (checklistTemplate) {
                resolve(checklistTemplate);
            } else {
                resolve({});
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createChecklistTemplate = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.ChecklistTemplate.create({
                fileName: data.fileName,
                data: data.data,
                createAt: new Date(),
                updateAt: null
            })
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let updateChecklistTemplate = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checklistTemplate = await db.ChecklistTemplate.findOne({
                where: {id: data.id}
            });
            checklistTemplate.content = data.content;
            checklistTemplate.result = data.result;
            checklistTemplate.updateAt = new Date()
            await checklistTemplate.save();
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let deleteChecklistTemplate = (checklistTemplateId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checklistTemplate = await db.ChecklistTemplate.findOne({
                where: {id: checklistTemplateId}
            });
            await checklistTemplate.destroy();
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllChecklistTemplate: getAllChecklistTemplate,
    getChecklistTemplateById: getChecklistTemplateById,
    createChecklistTemplate: createChecklistTemplate,
    updateChecklistTemplate: updateChecklistTemplate,
    deleteChecklistTemplate: deleteChecklistTemplate
}
