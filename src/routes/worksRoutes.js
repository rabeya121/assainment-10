const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController');
const authVerifyMiddleware = require('../middleware/authVerifyMiddleware');

router.get('/', authVerifyMiddleware, worksController.getAllWorks);
router.post('/', authVerifyMiddleware, worksController.createWork);
router.get('/:id', authVerifyMiddleware, worksController.getWorkById);
router.put('/:id', authVerifyMiddleware, worksController.updateWork);
router.delete('/:id', authVerifyMiddleware, worksController.deleteWork);

module.exports = router;
