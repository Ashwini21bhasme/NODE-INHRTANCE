const subServiceSchema = require("../schemaSubService/SubService");

class SubServiceModel {
  static async createSubService(sub_service_data) {
    try {
      const subService = new subServiceSchema({ ...sub_service_data });
      console.log(subService);
      await subService.save();
      return {
        code: 201,
        message: "User created successfully. post method .",
        data: subService,
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
  static async getSubService(sub_service_Getdata) {
    try {
      let subService_get;
      if (sub_service_Getdata && sub_service_Getdata._id) {
        subService_get = await subServiceSchema.findById(
          sub_service_Getdata._id
        );
      } else if (sub_service_Getdata && sub_service_Getdata.service_id) {
        subService_get = await subServiceSchema.find({
          service_id: sub_service_Getdata.service_id,
        });
      } else {
        subService_get = await subServiceSchema.find();
      }
      return {
        code: 201,
        message: "User created successfully. get method .",
        data: subService_get,
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
  static async updateSubService(sub_service_Updatedata) {
    try {
      const subServiceUpdate = await subServiceSchema.findByIdAndUpdate(
        sub_service_Updatedata._id,
        { ...sub_service_Updatedata }
      );
      console.log(subServiceUpdate);
      return {
        code: 201,
        message: "USER CREATE SUCCESSFULLY UPDATE METHOD",
        data: subServiceUpdate,
      };
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }
  static async deleteSubService(sub_service_deletedata) {
    try {
      let subServicedelete;
      if (sub_service_deletedata && sub_service_deletedata._id) {
        subServicedelete = await subServiceSchema.findOneAndRemove({
          _id: sub_service_deletedata._id,
        });
      } else if (sub_service_deletedata && sub_service_deletedata.service_id) {
        subServicedelete = await subServiceSchema.findOneAndRemove({
          service_id: sub_service_deletedata.service_id,
        });
      }

      return {
        code: 201,
        message: "USER CREATE SUCCESSFULLY UPDATE METHOD",
        data: subServicedelete,
      };
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }
}
module.exports = SubServiceModel;
