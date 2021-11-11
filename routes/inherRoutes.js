const businessControllers = require("../contollers/businessControllers");
const serviceControllers = require("../contollers/seviceContollers");
const sub_service_Controllers = require("../contollers/sub_service_Controllers");
module.exports = (app) => {
  //Business
  app.post("/create_business", businessControllers.createBusiness);
  app.get("/get_business", businessControllers.getBusiness);
  app.put("/update_business", businessControllers.updateBusiness);
  app.delete("/delete_business", businessControllers.deleteBusiness);

  //service
  app.post("/create-service", serviceControllers.createService);
  app.get("/get-service", serviceControllers.getService);
  app.put("/update-service", serviceControllers.updateService);
  app.delete("/delete-service", serviceControllers.deleteService);

  //sub_service
  app.post("/create-sub-service", sub_service_Controllers.createSubService);
  app.get("/get-sub-service", sub_service_Controllers.getSubService);
  app.put("/update-sub-service", sub_service_Controllers.updateSubService);
  app.delete("/delete-sub-service", sub_service_Controllers.deleteSubService);
};
