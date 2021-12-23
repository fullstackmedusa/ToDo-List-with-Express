var express = require('express');
var router = express.Router();

// import the skills controller
const skillsCtrl = require('../controllers/skills');

// This is where we will write all of our routes that the skills will need

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);

module.exports = router;