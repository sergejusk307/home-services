import businessService from '#src/api/v1/business/services/businessService.js';

const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await businessService.getAllBusinesses();
        res.json(businesses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBusinessesByCategory = async (req, res) => {
    try {
        const businesses = await businessService.getBusinessesByCategory(req.params.category);
        res.json(businesses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBusinessById = async (req, res) => {
    try {
        const business = await businessService.getBusinessById(req.params.id);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.json(business);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBusiness = async (req, res) => {
    try {
        const business = await businessService.createBusiness(req.body);
        res.status(201).json(business);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateBusiness = async (req, res) => {
    try {
        const updatedBusiness = await businessService.updateBusiness(req.params.id, req.body);
        if (!updatedBusiness) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.json(updatedBusiness);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getBookingsByBusinessAndDate = async (req, res) => {
    try {
        const bookings = await businessService.getBookingsByBusinessAndDate(req.params.businessId, req.params.date);
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
