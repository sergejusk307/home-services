import BusinessModel from '#api/models/businessModel.js';
import BookingModel from '#api/models/bookingModel.js';
import categoryService from '#api/categories/services/categoryService.js';

import ServiceError from '#api/util/ServiceError.js';

const createBusiness = async (data) => {
  const result = await categoryService.getCategoryById(data.categoryId);
  if (result.error) {
    return result;
  }

  if (result.data === null) {
    return ServiceError.notFound(`Category not found`);
  }

  const business = new BusinessModel(data);
  const savedBusiness = await business.save();

  if (!savedBusiness) {
    return ServiceError.internalError('Error saving business');
  }

  return { data: savedBusiness };
};

const getAllBusinesses = async () => {
  const businesses = await BusinessModel.find({});

  return { data: businesses };
};

const getBusinessById = async (id) => {
  const business = await BusinessModel.findById(id);

  if (!business) {
    return ServiceError.notFound(`Business not found`);
  }

  return { data: business };
};

const updateBusiness = async (id, updateData) => {
  const resultBusiness = await getBusinessById(id);

  if (resultBusiness.error) {
    return resultBusiness;
  }

  if (resultBusiness.data === null) {
    return ServiceError.notFound(`Business not found`);
  }

  const resultCategory = await categoryService.getCategoryById(resultBusiness.data.categoryId);
  if (resultCategory.error) {
    return resultCategory;
  }

  if (resultCategory.data === null) {
    return ServiceError.notFound(`Category not found`);
  }

  const business = await BusinessModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!business) {
    return ServiceError.internalError('Error updating business');
  }

  return { data: business };
};

const getBusinessesByCategory = async (categoryId) => {
  const businesses = await BusinessModel.find({ categoryId });

  return { data: businesses };
};

const getBookingsByBusinessAndDate = async (businessId, date) => {
  const bookings = await BookingModel.find({
    businessId,
    date,
  });

  return bookings;
};

export default {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  getBusinessesByCategory,
  getBookingsByBusinessAndDate,
};
