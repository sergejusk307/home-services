import BusinessModel from '#src/api/v1/models/businessModel.js';
import BookingModel from '#src/api/v1/models/bookingModel.js';

const createBusiness = async (data) => {
    const business = new BusinessModel(data);
    return await business.save();
};

const getAllBusinesses = async () => {
    return await BusinessModel.find({});
};

const getBusinessById = async (id) => {
    return await BusinessModel.findById(id);
};

const updateBusiness = async (id, updateData) => {
    return await BusinessModel.findByIdAndUpdate(id, updateData, { new: true });
};

const getBusinessesByCategory = async (category) => {
    return await BusinessModel.find({ category });
};

const getBookingsByBusinessAndDate = async (businessId, date) => {
    try {
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
    } catch (error) {
        console.error('Error retrieving bookings:', error);
        throw new Error('Could not retrieve bookings');
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
