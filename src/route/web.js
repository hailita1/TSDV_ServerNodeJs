import express from "express";
import checklistController from "../controller/ChecklistController"
import checklistTemplateController from "../controller/ChecklistTemplateController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/api/checklist', checklistController.getAllChecklist);
    router.get('/api/checklist/:id', checklistController.getChecklistById);
    router.post('/api/checklist', checklistController.createChecklist);
    router.put('/api/checklist', checklistController.updateChecklist);
    router.delete('/api/checklist/:id', checklistController.deleteChecklist);


    router.get('/api/checklistTemplate', checklistTemplateController.getAllChecklistTemplate)
    router.get('/api/checklistTemplate/:id', checklistTemplateController.getChecklistTemplateById)
    router.post('/api/checklistTemplate', checklistTemplateController.createChecklistTemplate)
    router.put('/api/checklistTemplate', checklistTemplateController.createChecklistTemplate)
    router.delete('/api/checklistTemplate/:id', checklistTemplateController.deleteChecklistTemplate)
    return app.use("/", router);
}

module.exports = initWebRoutes;
