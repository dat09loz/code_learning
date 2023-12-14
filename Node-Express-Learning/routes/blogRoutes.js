const express = require('express');
const blogController = require('../controller/blogController')
//create a express router (a 'miniapp')
const router = express.Router();

//*blog routes
router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/', blogController.blog_create_post);
//blog details
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

//export
module.exports = router;