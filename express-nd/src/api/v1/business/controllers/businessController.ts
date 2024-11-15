import mongoose from 'mongoose';
import businessService from '#api/business/services/businessService.js';
import { ApiResponseType } from '#api/type';
import { isErrorResponse } from '#api/util/typeGuards';

const getAllBusinesses: ApiResponseType = async (req, res, next) => {
  try {
    const result = await businessService.getAllBusinesses();

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const getBusinessesByCategory: ApiResponseType = async (req, res, next) => {
  try {
    const categoryId = new mongoose.Types.ObjectId(req.params.category);

    const result = await businessService.getBusinessesByCategory(categoryId);

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const getBusinessById: ApiResponseType = async (req, res, next) => {
  try {
    const businessId = new mongoose.Types.ObjectId(req.params.id);

    const result = await businessService.getBusinessById(businessId);

    if (isErrorResponse(result)) {
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

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.created(result.data);
  } catch (error) {
    next(error);
  }
};

const updateBusiness: ApiResponseType = async (req, res, next) => {
  try {
    const businessId = new mongoose.Types.ObjectId(req.params.id);

    const body = req.body;

    const result = await businessService.updateBusiness(businessId, body);

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const getBookingsByBusinessAndDate: ApiResponseType = async (req, res, next) => {
  try {
    const businessId = new mongoose.Types.ObjectId(req.params.id);

    const { date } = req.params;

    const result = await businessService.getBookingsByBusinessAndDate(businessId, date);

    if (isErrorResponse(result)) {
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
