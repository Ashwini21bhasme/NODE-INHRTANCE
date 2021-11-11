const BusinessModel = require("../model/BusinessModel");

class businessControllers {
  static createBusiness(req, res) {
    const businessData = req.body;
    BusinessModel.createBusiness(businessData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static getBusiness(req, res) {
    const businessGetData = req.query;
    BusinessModel.getBusiness(businessGetData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static updateBusiness(req, res) {
    const businessUpdateData = req.body;
    console.log(businessUpdateData);
    BusinessModel.updateBusiness(businessUpdateData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
  static deleteBusiness(req, res) {
    const businessDeleteData = req.body;
    BusinessModel.deleteBusiness(businessDeleteData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
}
module.exports = businessControllers;
