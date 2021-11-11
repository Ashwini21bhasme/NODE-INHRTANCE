const businessSchema = require("../schemaBusiness/Business");

class BusinessModel {
  static async createBusiness(businessData) {
    try {
      const business = new businessSchema({ ...businessData });
      await business.save();
      return {
        code: 200,
        message: "User created successfully. post method .",
        data: business,
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
  static async getBusiness(businessGetData) {
    try {
      let businessGet;
      if (businessGetData && businessGetData._id) {
        businessGet = await businessSchema.findById(businessGetData._id);
      } else if (businessGetData && businessGetData.business_name) {
        businessGet = await businessSchema.find({
          business_name: businessGetData.business_name,
        });
      } else {
        businessGet = await businessSchema.find();
      }
      return {
        code: 200,
        message: "USER GET SUCESSFULLY ",
        data: businessGet,
      };
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }

  static async updateBusiness(businessUpdateData) {
    try {
      let businessUpdate;
      if (businessUpdateData && businessUpdateData._id) {
        businessUpdate = await businessSchema.findByIdAndUpdate(
          {
            _id: businessUpdateData._id,
          },
          { ...businessUpdateData }
        );
      } else if (businessUpdateData && businessUpdateData.business_name) {
        businessUpdate = await businessSchema.updateOne(
          {
            business_name: businessUpdateData.business_name,
          },
          { ...businessUpdateData }
        );
      }
      return {
        code: 200,
        message: "USER UPDATE SUCESSFULLY ",
        data: businessUpdate,
      };
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }

  static async deleteBusiness(businessDeleteData) {
    try {
      let businessDelete;
      console.log(businessDelete);
      if (businessDeleteData && businessDeleteData._id) {
        businessDelete = await businessSchema.findOneAndDelete({
          _id: businessDeleteData._id,
        });
      } else if (businessDeleteData && businessDeleteData.business_name) {
        businessDelete = await businessSchema.findOneAndDelete({
          business_name: businessDeleteData.business_name,
        });
      }

      return {
        code: 200,
        message: "USER DELETE SUCESSFULLY ",
        data: businessDelete,
      };
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Sdddderver Error.",
      };
    }
  }
}

module.exports = BusinessModel;
