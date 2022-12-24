const { Router } = require('express')
const { 
    getProducts,
    createProduct, 
    putProduct, 
    deleteProduct, 
    getProductById  } = require('../controller/controller')


const router = Router()

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/put/:id', putProduct);
router.delete('/delete/:id', deleteProduct);


module.exports = router;