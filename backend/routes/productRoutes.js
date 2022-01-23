import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getNewArrivals,
  getBestSellers,
  getRomanticBooks,
  getFictionBooks,
  getEducationalBooks,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.get('/new',getNewArrivals)
router.get('/best',getBestSellers)
router.get('/romantic',getRomanticBooks)
router.get('/fiction',getFictionBooks)
router.get('/educational',getEducationalBooks)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
