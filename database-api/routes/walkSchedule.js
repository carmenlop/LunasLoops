const router = require('express').Router()
const ctrl = require('../controllers')

// testing now, will add auth after all is working
// const authRequired = require('../middleware/authRequired')

router.get('/', ctrl.walkSchedule.index)
router.post('/new', ctrl.walkSchedule.create)
router.get('/:id', ctrl.walkSchedule.show)
router.put('/:id', ctrl.walkSchedule.update)
router.delete('/:id', ctrl.walkSchedule.destroy)

module.exports = router