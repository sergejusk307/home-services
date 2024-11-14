import businessService from '#api/business/services/businessService.js';
import { ApiResponseType } from '#api/type';

const getAllBusinesses = async (req, res, next) => {
  try {
    const result = await businessService.getAllBusinesses();

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const getBusinessesByCategory: ApiResponseType = async (req, res, next) => {
  try {
    const { category } = req.params;

    const result = await businessService.getBusinessesByCategory(category);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const getBusinessById: ApiResponseType = async (req, res, next) => {
  try {
    const { id: businessId } = req.params;

    const result = await businessService.getBusinessById(businessId);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const createBusiness: ApiResponseType = async (req, res, next) => {
  try {
    const businessData = req.body;

    const result = await businessService.createBusiness(businessData);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.created(result.data);
  } catch (error) {
    next(error);
  }
};

const updateBusiness: ApiResponseType = async (req, res, next) => {
  try {
    const { id: businessId } = req.params;
    const body = req.body;

    const result = await businessService.updateBusiness(businessId, body);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const getBookingsByBusinessAndDate: ApiResponseType = async (req, res, next) => {
  try {
    const { businessId, date } = req.params;

    const result = await businessService.getBookingsByBusinessAndDate(businessId, date);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

export default {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  getBusinessesByCategory,
  getBookingsByBusinessAndDate,
};
