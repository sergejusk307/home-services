import BusinessModel from '#api/models/businessModel.js';
import BookingModel from '#api/models/bookingModel.js';

import HttpException from '#src/exceptions/HttpException.js';
import { HTTP_RESPONSE_CODE } from '#const/global.js';


const createBusiness = async(data) => {
    const business = new BusinessModel(data);
    return await business.save();
};

const getAllBusinesses = async() => {
    return await BusinessModel.find({});
};

const getBusinessById = async(id) => {
    return await BusinessModel.findById(id);
};

const updateBusiness = async(id, updateData) => {
    const business = await BusinessModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!business) {
        throw new HttpException(HTTP_RESPONSE_CODE.NOT_FOUND, 'Business not found');
    }
    return business;
};

const getBusinessesByCategory = async(category) => {
    return await BusinessModel.find({ category });
};

const getBookingsByBusinessAndDate = async(businessId, date) => {
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    const bookings = await BookingModel.find({
        businessId: businessId,
        date: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    });

    return bookings;
};

const checkIfBusinessExists = async(id) => {
    const business = await BusinessModel.findOne({ id });
    return business ? true : false;
};

export default {
    createBusiness,
    getAllBusinesses,
    getBusinessById,
    updateBusiness,
    getBusinessesByCategory,
    getBookingsByBusinessAndDate,
    checkIfBusinessExists,
};