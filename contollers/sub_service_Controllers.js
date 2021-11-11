const SubServiceModel = require("../model/SubServiceModel");
class sub_service_Controllers {
  static createSubService(req, res) {
    const sub_service_data = req.body;
    SubServiceModel.createSubService(sub_service_data)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static getSubService(req, res) {
    const sub_service_Getdata = req.query;
    console.log(sub_service_Getdata);
    SubServiceModel.getSubService(sub_service_Getdata)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static updateSubService(req, res) {
    const sub_service_Updatedata = req.body;
    console.log(sub_service_Updatedata);
    SubServiceModel.updateSubService(sub_service_Updatedata)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static deleteSubService(req, res) {
    const sub_service_deletedata = req.body;
    SubServiceModel.deleteSubService(sub_service_deletedata)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
}
module.exports = sub_service_Controllers;
