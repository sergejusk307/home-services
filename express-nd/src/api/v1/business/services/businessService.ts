import { IBusiness, BusinessModel } from '#api/models/businessModel.js';
import { BookingModel, IBooking } from '#api/models/bookingModel.js';
import categoryService from '#api/categories/services/categoryService.js';

import ServiceError from '#src/api/v1/util/serviceError.js';
import { ServiceResponseType } from '#api/type/serviceResponse';
import { isErrorResponse } from '#api/util/typeGuards';

const createBusiness = async (data: IBusiness): ServiceResponseType<IBusiness> => {
  const result = await categoryService.getCategoryById(data.categoryId);

  if (isErrorResponse(result)) {
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

const getAllBusinesses = async (): ServiceResponseType<IBusiness[]> => {
  const businesses = await BusinessModel.find({});

  return { data: businesses };
};

const getBusinessById = async (id: IBusiness['_id']): ServiceResponseType<IBusiness> => {
  const business = await BusinessModel.findById(id);

  if (!business) {
    return ServiceError.notFound(`Business not found`);
  }

  return { data: business };
};

const updateBusiness = async (id: IBusiness['_id'], updateData: IBusiness): ServiceResponseType<IBusiness> => {
  const resultBusiness = await getBusinessById(id);

  if (isErrorResponse(resultBusiness)) {
    return resultBusiness;
  }

  if (resultBusiness.data === null) {
    return ServiceError.notFound(`Business not found`);
  }

  const resultCategory = await categoryService.getCategoryById(resultBusiness.data.categoryId);

  if (isErrorResponse(resultCategory)) {
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

const getBusinessesByCategory = async (categoryId: IBusiness['categoryId']): ServiceResponseType<IBusiness[]> => {
  const businesses = await BusinessModel.find({ categoryId });

  return { data: businesses };
};

const getBookingsByBusinessAndDate = async (
  businessId: IBusiness['_id'],
  date: IBooking['date']
): ServiceResponseType<IBooking[]> => {
  const bookings = await BookingModel.find({
    businessId,
    date,
  });

  return { data: bookings };
};

export default {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  getBusinessesByCategory,
  getBookingsByBusinessAndDate,
};
