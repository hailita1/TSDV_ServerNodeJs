import checklistTemplateService from '../service/ChecklistTemplateService'

let getAllChecklistTemplate = async (req, res) => {
    try {
        let data = await checklistTemplateService.getAllChecklistTemplate()
        return res.send(data);
    } catch (e) {
        return res.send(e);
    }
}

let getChecklistTemplateById = async (req, res) => {
    try {
        let checklistTemplateId = req.param("id");
        let checklistData = await checklistTemplateService.getChecklistTemplateById(checklistTemplateId);
        return res.send(checklistData);
    } catch (e) {
        return res.send(e);
    }
}

let createChecklistTemplate = async (req, res) => {
    try {
        await checklistTemplateService.createChecklistTemplate(req.body);
        return res.status(200).json({
            message: ' Successfully'
        })
    } catch (e) {
        return res.status(500).json({
            message: e
        });
    }
}

let updateChecklistTemplate = async (req, res) => {
    try {
        await checklistTemplateService.updateChecklistTemplate(req.body);
        return res.status(200).json({
            message: ' Successfully'
        })
    } catch (e) {
        return res.status(500).json({
            message: e
        });
    }
}

let deleteChecklistTemplate = async (req, res) => {
    try {
        let checklistId = req.param("id");
        await checklistTemplateService.deleteChecklistTemplate(checklistId);
        return res.status(200).json({
            message: ' Successfully'
        })
    } catch (e) {
        return res.status(500).json({
            message: e
        });
    }
}

module.exports = {
    getAllChecklistTemplate: getAllChecklistTemplate,
    getChecklistTemplateById: getChecklistTemplateById,
    createChecklistTemplate: createChecklistTemplate,
    updateChecklistTemplate: updateChecklistTemplate,
    deleteChecklistTemplate: deleteChecklistTemplate
}
