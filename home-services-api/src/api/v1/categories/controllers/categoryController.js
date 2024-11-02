import categoryService from '#src/api/v1/categories/services/categoryService.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        let { image } = req.body;
        if (!image) {
            const lock = Math.floor(Math.random() * 100000) + 1;
            image = `https://loremflickr.com/320/240/${name.replace(/\s/g, ',')}?lock=${lock}`;
        }
        
        const newCategory = await categoryService.createCategory({ name, description, image });
        res.status(201).json({ newCategory });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
