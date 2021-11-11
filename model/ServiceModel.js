const serviceSchema = require("../schemaService/Service");

class ServiceModel {
  static async createService(serviceData) {
    try {
      const service = new serviceSchema({ ...serviceData });
      await service.save();
      return {
        code: 200,
        message: "User created successfully service.",
        data: service,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }
  static async getService(serviceGetData) {
    try {
      let serviceGet;
      if (serviceGetData && serviceGetData._id) {
        serviceGet = await serviceSchema.findById(serviceGetData._id);
      } else if (serviceGetData && serviceGetData.service_name) {
        serviceGet = await serviceSchema.find({
          service_name: serviceGetData.service_name,
        });
      } else if (serviceGetData && serviceGetData.business_id) {
        serviceGet = await serviceSchema.find({
          business_id: serviceGetData.business_id,
        });
      } else {
        serviceGet = await serviceSchema.find();
      }
      return {
        code: 200,
        message: "User created successfully service.",
        data: serviceGet,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }
  static async updateService(serviceupdateData) {
    try {
      let serviceUpdate;
      if (serviceupdateData && serviceupdateData._id) {
        serviceUpdate = await serviceSchema.findOneAndUpdate(
          { _id: serviceupdateData._id },
          { ...serviceupdateData }
        );
      } else if (serviceupdateData && serviceupdateData.service_name) {
        serviceUpdate = await serviceSchema.findOneAndUpdate(
          { service_name: serviceupdateData.service_name },
          { ...serviceupdateData }
        );
      }
      return {
        code: 201,
        message: "User created successfully service.",
        data: serviceUpdate,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }
  static async deleteService(servicedeleteData) {
    try {
      let serviceDelete;
      if (servicedeleteData && servicedeleteData._id) {
        serviceDelete = await serviceSchema.findOneAndDelete({
          _id: servicedeleteData._id,
        });
      } else if (servicedeleteData && servicedeleteData.business_id) {
        serviceDelete = await serviceSchema.findOneAndDelete({
          business_id: servicedeleteData.business_id,
        });
      }

      return {
        code: 201,
        message: "User delete successfully service.",
        data: serviceDelete,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }
}
module.exports = ServiceModel;
