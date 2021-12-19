import checklistService from '../service/ChecklistService'

let getAllChecklist = async (req, res) => {
    try {
        let data = await checklistService.getAllChecklist()
        return res.send(data);
    } catch (e) {
        return res.send(e);
    }
}

let getChecklistById = async (req, res) => {
    try {
        let checklistId = req.param("id");
        let checklistData = await checklistService.getChecklistById(checklistId);
        return res.send(checklistData);
    } catch (e) {
        return res.send(e);
    }
}

let createChecklist = async (req, res) => {
    try {
        await checklistService.createChecklist(req.body);
        return res.send('Successfully')
    } catch (e) {
        return res.send(e);
    }
}

let updateChecklist = async (req, res) => {
    try {
        await checklistService.updateChecklist(req.body);
        return res.send('Successfully')
    } catch (e) {
        return res.send(e);
    }
}

let deleteChecklist = async (req, res) => {
    try {
        let checklistId = req.param("id");
        await checklistService.deleteChecklist(checklistId);
        return res.send('Successfully')
    } catch (e) {
        return res.send(e);
    }
}

module.exports = {
    getAllChecklist: getAllChecklist,
    getChecklistById: getChecklistById,
    createChecklist: createChecklist,
    updateChecklist: updateChecklist,
    deleteChecklist: deleteChecklist
}

