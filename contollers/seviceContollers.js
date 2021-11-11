const ServiceModel = require("../model/ServiceModel");
class serviceControllers {
  static createService(req, res) {
    const serviceData = req.body;
    ServiceModel.createService(serviceData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static getService(req, res) {
    const serviceGetData = req.query;
    console.log(serviceGetData);
    ServiceModel.getService(serviceGetData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static updateService(req, res) {
    const serviceupdateData = req.body;
    console.log(serviceupdateData);
    ServiceModel.updateService(serviceupdateData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static deleteService(req, res) {
    const servicedeleteData = req.body;
    ServiceModel.deleteService(servicedeleteData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
}
module.exports = serviceControllers;
