import express from 'express';
import {getCategories, createCategory} from '#src/api/v1/categories/controllers/categoryController.js';

const router = express.Router();

router.get('/', getCategories
  /* #swagger.responses[200] = {
    description: "Successful Response",
    content: {
        "application/json": {
            schema: {
                type: "object",
                properties: {
                    categories: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                description: { type: "string" },
                                image: { type: "string" },
                                id: { type: "string" }
                            },
                            required: ["name", "description", "image", "id"]
                        }
                    }
                },
                required: ["categories"]
            }
        }
    }
} */
);

router.post('/', createCategory);

export default router;
