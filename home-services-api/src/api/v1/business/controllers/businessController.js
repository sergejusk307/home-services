import businessService from '#api/business/services/businessService.js';

const getAllBusinesses = async(req, res, next) => {
    try {
        const businesses = await businessService.getAllBusinesses();
        res.success(businesses);
    } catch (error) {
        next(error);
    }
};

const getBusinessesByCategory = async(req, res, next) => {
    try {
        const businesses = await businessService.getBusinessesByCategory(req.params.category);
        res.success(businesses);
    } catch (error) {
        next(error);
    }
};

const getBusinessById = async(req, res, next) => {
    try {
        const business = await businessService.getBusinessById(req.params.id);
        res.success(business);
    } catch (error) {
        next(error);
    }
};

const createBusiness = async(req, res, next) => {
    try {
        const business = await businessService.createBusiness(req.body);
        res.created(business);
    } catch (error) {
        next(error);
    }
};

const updateBusiness = async(req, res, next) => {
    try {
        const updatedBusiness = await businessService.updateBusiness(req.params.id, req.body);
        res.success(updatedBusiness);
    } catch (error) {
        next(error);
    }
};

const getBookingsByBusinessAndDate = async(req, res, next) => {
    try {
        const bookings = await businessService.getBookingsByBusinessAndDate(req.params.businessId, req.params.date);
        res.success(bookings);
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