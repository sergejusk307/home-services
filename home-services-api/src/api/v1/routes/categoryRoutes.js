import express from 'express';
import {getCategories, createCategory} from '#src/api/v1/categories/controllers/categoryController.js';

const router = express.Router();
/**
 * @openapi
 * tags:
 *   - name: Categories
 *     description: Category operations
 */

/**
 * @openapi
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/', getCategories);

/**
 * @openapi
 * /api/v1/categories:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 */
router.post('/', createCategory);

export default router;
