const router = require('express').Router()
const ctrl = require('../controllers')

// testing now, will add auth after all is working
// const authRequired = require('../middleware/authRequired')

router.get('/', ctrl.clients.index)
router.get('/:id', ctrl.clients.show)
router.post('/', ctrl.clients.create)
router.put('/:id', ctrl.clients.update)
router.delete('/:id', ctrl.clients.destroy)

module.exports = router